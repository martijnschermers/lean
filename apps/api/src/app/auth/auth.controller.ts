import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ResourceId, Token, UserCredentials, UserRegistration } from "@lean/api-interfaces";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("register")
  async register(@Body() credentials: UserRegistration): Promise<ResourceId> {
    console.log(credentials);
    try {
      await this.authService.registerUser(credentials.username, credentials.password, credentials.email);

      return {
        id: await this.authService.createUser(credentials.username, credentials.email)
      };
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e.message);
    }
  }

  @Post("login")
  async login(@Body() credentials: UserCredentials): Promise<Token> {
    try {
      return {
        token: await this.authService.generateToken(credentials.username, credentials.password)
      };
    } catch (e) {
      console.log(e)
      throw new UnauthorizedException("Invalid credentials");
    }
  }
}
