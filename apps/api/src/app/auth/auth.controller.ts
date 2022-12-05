import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserCredentials, UserRegistration } from "@lean/api-interfaces";
import { User } from "../user/user.schema";
import { Identity } from "./identity.schema";

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
  async login(@Body() credentials: UserCredentials): Promise<Identity> {
    try {
      const identity = await this.authService.generateToken(credentials.email, credentials.password);
      identity.hash = undefined;
      return identity;
    } catch (e) {
      throw new UnauthorizedException("Invalid credentials");
    }
  }

  @Post("verify")
  async verify(@Body() token: string): Promise<boolean> {
    return this.authService.verifyToken(token);
  }
}
