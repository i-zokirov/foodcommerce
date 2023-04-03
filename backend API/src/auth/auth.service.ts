import { Injectable, BadRequestException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { User } from "../users/entities/user.entity";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findOne(email);
        if (!user) {
            throw new BadRequestException("Invalid credentials");
        }
        const [salt, storedHash] = user.password.split(".");
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        if (storedHash !== hash.toString("hex")) {
            throw new BadRequestException("Invalid credentials");
        }
        const { password: _, ...rest } = user;
        return rest;
    }
    login(user: Partial<User>) {
        const payload = { email: user.email, sub: user.id };
        const { password: _, ...rest } = user;
        return {
            access_token: this.jwtService.sign(payload),
            ...rest,
        };
    }

    signToken(user: Partial<User>) {
        const payload = { email: user.email, sub: user.id };
        const { password: _, ...rest } = user;
        return {
            access_token: this.jwtService.sign(payload),
            ...rest,
        };
    }

    async register(createUserDto: CreateUserDto) {
        const users = await this.usersService.find(createUserDto.email);
        if (users.length) {
            throw new BadRequestException("Email already in use");
        }
        const salt = randomBytes(8).toString("hex");
        const hash = (await scrypt(createUserDto.password, salt, 32)) as Buffer;
        const result = salt + "." + hash.toString("hex");
        Object.assign(createUserDto, { password: result });

        const user = await this.usersService.create(createUserDto);
        const { password: _, ...rest } = user;
        const { access_token } = this.login(user);
        return { ...rest, access_token };
    }
}
