import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateIndependentDto } from "src/user-independent/Dto/create.independent.dto";
import { CreateDependentDto } from "src/user-dependent/Dto/create.dependent.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login/independent")
  login(@Body() customerDto: CreateIndependentDto) {
    return this.authService.login(customerDto);
  }

  @Post("/registration/independent")
  async registration(@Body() customerDto: CreateIndependentDto) {
    return this.authService.registration(customerDto);
  }

  @Post("/login/dependent")
  loginDep(@Body() customerDto: CreateDependentDto) {
    return this.authService.loginDep(customerDto);
  }

  @Post("/registration/dependent")
  async registrationDep(@Body() customerDto: CreateDependentDto) {
    return this.authService.registrationDep(customerDto);
  }
}
