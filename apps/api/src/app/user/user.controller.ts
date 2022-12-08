import { Controller, Get, Param, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.schema";
import { InjectToken, Token } from "../auth/token.decorator";

@Controller()
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  async findOneByEmail(@Query("email") email: string): Promise<User> {
    return this.userService.findOneByEmail(email);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Get(":id/follow")
  async follow(@InjectToken() token: Token, @Param("id") id: string): Promise<void> {
    return this.userService.follow(token.id, id);
  }
}
