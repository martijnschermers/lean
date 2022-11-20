import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User, UserCredentials, UserRegistration } from "@lean/api-interfaces";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("register")
  async register(@Body() credentials: UserRegistration): Promise<User> {
    try {
      await this.authService.registerUser(credentials.username, credentials.password, credentials.email);

      return await this.authService.createUser(credentials.username, credentials.email);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post("login")
  async login(@Body() credentials: UserCredentials): Promise<{ token: string }> {
    try {
      return {
        token: await this.authService.generateToken(credentials.email, credentials.password)
      };
    } catch (e) {
      throw new UnauthorizedException("Invalid credentials");
    }
  }
}
