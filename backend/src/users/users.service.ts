import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserRole } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repository: Repository<User>) {}
    create(createUserDto: CreateUserDto) {
        const user = this.repository.create({
            ...createUserDto,
            role: UserRole.Merchant,
        });
        return this.repository.save(user);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(email: string) {
        if (!email) return null;
        return this.repository.findOne({ where: { email } });
    }

    findById(id: string) {
        if (!id) return null;
        return this.repository.findOneBy({ id });
    }

    async update(id: string, attrs: Partial<User>) {
        const user = await this.findById(id);
        if (!user) {
            throw new NotFoundException("User not found");
        }
        Object.assign(user, attrs);
        return this.repository.save(user);
    }

    async remove(id: string) {
        const user = await this.findById(id);
        if (!user) {
            throw new NotFoundException("User not found");
        }
        return this.repository.remove(user);
    }
}
