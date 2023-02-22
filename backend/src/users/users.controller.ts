import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import Serialize from "../interceptors/serialize.interceptor";
import { UserDto } from "./dto/user.dto";
import CurrentUser from "../decorators/current-user.decorator";
import { User } from "./entities/user.entity";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/profile")
    @Serialize(UserDto)
    fetchUserProfile(@CurrentUser() user: User) {
        return user;
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.usersService.findById(id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.usersService.remove(id);
    }
}
