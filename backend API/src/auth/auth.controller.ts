import { Controller, Request, Post, UseGuards, Body } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { Request as _Request } from "express";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @ApiOperation({ summary: "Login and get token" })
    @Post("/login")
    async login(@Request() req: _Request, @Body() loginDto: LoginDto) {
        return this.authService.login(req.user);
    }

    @Post("/register")
    register(@Body() userdata: CreateUserDto) {
        return this.authService.register(userdata);
    }
}
