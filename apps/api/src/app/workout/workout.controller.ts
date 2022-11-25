import { Body, Controller, Get, Post } from "@nestjs/common";
import { WorkoutService } from "./workout.service";
import { Workout } from "@lean/api-interfaces";
import { InjectToken, Token } from "../auth/token.decorator";

@Controller()
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {
  }

  @Get()
  findAll(@InjectToken() token: Token): Promise<Workout[]> {
    return this.workoutService.findAll(token.id);
  }

  @Post()
  createWorkout(@InjectToken() token: Token, @Body() workout: Workout): Promise<Workout> {
    return this.workoutService.createWorkout(token.id, workout);
  }
}
