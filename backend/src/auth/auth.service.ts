import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/entities/user.entity";
import { CreateUserDto } from "src/users/dto/create-user.dto";
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findOne(email);
        if (user && user.password === password) {
            const { password, ...rest } = user;
            return rest;
        }
    }
    login(user: Partial<User>) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(createUserDto: CreateUserDto) {
        const user = await this.usersService.create(createUserDto);
        const { password: _, ...rest } = user;
        const { access_token } = this.login(user);
        return { ...rest, access_token };
    }
}
