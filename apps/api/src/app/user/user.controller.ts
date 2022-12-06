import { Controller, Get, Param, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.schema";

@Controller()
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  async findOneByEmail(@Query("email") email: string): Promise<User> {
    return this.userService.findOneByEmail(email);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<User> {
    return this.userService.findOne(id);
  }
}
