import {
    Controller,
    Request,
    Post,
    UseGuards,
    Get,
    Body,
} from "@nestjs/common";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { AuthService } from "./auth.service";
import Serialize from "../interceptors/serialize.interceptor";
import { UserDto } from "../users/dto/user.dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}
    @UseGuards(LocalAuthGuard)
    @Post("/login")
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post("/register")
    register(@Body() userdata: CreateUserDto) {
        return this.authService.register(userdata);
    }
    @UseGuards(JwtAuthGuard)
    @Get("profile")
    @Serialize(UserDto)
    getProfile(@Request() req) {
        return req.user;
    }
}
