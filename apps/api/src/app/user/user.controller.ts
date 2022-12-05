import { Controller, Get, Query } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  findOne(@Query("email") email: string) {
    return this.userService.findOneByEmail(email);
  }
}
