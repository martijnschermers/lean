import { Exercise } from "@lean/api-interfaces";
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put
} from "@nestjs/common";
import { ExercisesService } from "../services/exercises.service";

@Controller("exercises")
export class ExercisesController {

  constructor(private exercisesService: ExercisesService) {
  }

  @Post()
  async createExercise(@Body() exercise: Exercise): Promise<Exercise> {
    return this.exercisesService.createExercise(exercise);
  }

  @Get()
  async findAll(): Promise<Exercise[]> {
    return this.exercisesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Exercise> {
    const exercise = await this.exercisesService.findOne(id);

    if (!exercise) {
      throw new NotFoundException("Could not find exercise with id " + id);
    }

    return exercise;
  }

  @Put(":id")
  async updateExercise(@Param("id") id: string, @Body() exercise: Exercise): Promise<Exercise> {

    if (exercise._id) {
      throw new BadRequestException("You cannot change the id");
    }

    return this.exercisesService.updateExercise(id, exercise);
  }

  @Delete(":id")
  async deleteExercise(@Param("id") id: string): Promise<Exercise> {
    return this.exercisesService.deleteExercise(id);
  }
}
