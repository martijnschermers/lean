import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserService } from "../user/user.service";
import { Workout, WorkoutDocument } from "./workout.schema";
import { ExerciseService } from "../exercise/exercise.service";
import { Set } from "../set/set.schema";
import { Neo4jService } from "nest-neo4j/dist";
import { WorkoutInterface } from "@lean/api-interfaces";

@Injectable()
export class WorkoutService {
  constructor(@InjectModel(Workout.name) private workoutModel: Model<WorkoutDocument>, private userService: UserService, private exerciseService: ExerciseService, private neoService: Neo4jService) {
  }

  async findAll(id: string): Promise<Workout[]> {
    return this.userService.findAllWorkouts(id);
  }

  async findOne(id: string): Promise<Workout> {
    return this.workoutModel.findById(id, { __v: 0 });
  }

  async findRecommendedWorkouts(userId: string): Promise<Workout[]> {
    const recommendedWorkouts = await this.neoService.read(`
      MATCH (u:User {id: $userId})-[f:FOLLOWS]->(fu:User)-[fw:HAS_WORKOUT]->(w:Workout)
      WHERE NOT (u)-[:HAS_WORKOUT]->(w)
      RETURN w LIMIT 3
    `, { userId });

    const workouts: Workout[] = [];
    for (const workout of recommendedWorkouts.records.map(record => record.get("w").properties)) {
      await this.findOne(workout.id).then(workout => {
        workouts.push(workout);
      }).then(() => {
        return workouts;
      });
    }

    return workouts;
  }

  async createWorkout(userId: string, workout: Workout): Promise<Workout> {
    for (const set of workout.sets) {
      set.exercise = await this.exerciseService.findOne(set["exerciseId"]);
    }

    workout.volume = await this.calculateVolume(workout.sets);
    workout.prs = 0;

    const newWorkout = new this.workoutModel(workout);
    await newWorkout.save();

    await this.neoService.write(`
      MATCH (u:User {id: $userId})
      CREATE (u)-[:HAS_WORKOUT]->(w:Workout {id: $workoutId, name: $workoutName})
    `, { userId, workoutId: newWorkout.id, workoutName: newWorkout.name });

    await this.userService.addWorkout(userId, newWorkout.id);

    return newWorkout.toObject({ versionKey: false });
  }

  private async calculateVolume(sets: Set[]): Promise<number> {
    let volume = 0;

    return new Promise(resolve => {
      sets.forEach(set => {
        volume += set.reps * set.weight;
      });
      resolve(volume);
    });
  }

  async deleteWorkout(userId: string, workoutId: string): Promise<boolean> {
    const result = await this.workoutModel.deleteOne({ _id: workoutId });

    if (result.deletedCount == 0) {
      throw new Error("Workout not found");
    }

    await this.userService.deleteWorkout(userId, workoutId);

    return true;
  }
}
