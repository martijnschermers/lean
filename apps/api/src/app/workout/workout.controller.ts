import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { WorkoutService } from "./workout.service";
import { InjectToken, Token } from "../auth/token.decorator";
import { Workout } from "./workout.schema";

@Controller()
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {
  }

  @Get()
  async findAll(@InjectToken() token: Token): Promise<Workout[]> {
    return this.workoutService.findAll(token.id);
  }

  @Get("recommendations")
  async getRecommendations(@InjectToken() token: Token): Promise<Workout[]> {
    return this.workoutService.findRecommendedWorkouts(token.id);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Workout> {
    return this.workoutService.findOne(id);
  }

  @Post()
  async createWorkout(@InjectToken() token: Token, @Body() workout: Workout): Promise<Workout> {
    return this.workoutService.createWorkout(token.id, workout);
  }

  @Delete(":id")
  async deleteWorkout(@InjectToken() token: Token, @Param("id") id: string): Promise<boolean> {
    return this.workoutService.deleteWorkout(token.id, id);
  }
}
