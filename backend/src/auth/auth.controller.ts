import { Controller, Request, Post, UseGuards, Body } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { AuthService } from "./auth.service";

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
}
