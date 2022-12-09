import { TestBed } from "@angular/core/testing";

import { ExerciseService } from "./exercise.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { MockService } from "ng-mocks";
import { ExerciseCategory, ExerciseInterface, ExerciseType, Muscle } from "@lean/api-interfaces";
import { of } from "rxjs";

describe("ExerciseService", () => {
  let service: ExerciseService;

  beforeEach(() => {
    const exercises = [
      {
        _id: "61950e163526e4c9533dd4f5",
        name: "Bench press",
        description: "Bench press description",
        primaryMuscle: "Chest",
        category: "Barbell",
        type: "Strength",
        predefined: true,
        __v: 0
      },
      {
        _id: "61950ff63526e4c9533dd50e",
        name: "Squat",
        description: "Squat description",
        primaryMuscle: "Quads",
        category: "Barbell",
        type: "Strength",
        predefined: true,
        __v: 0
      },
      {
        _id: "619bde033b174a700c923e11",
        name: "Deadlift",
        description: "Deadlift description",
        primaryMuscle: "Back",
        category: "Barbell",
        type: "Strength",
        predefined: true,
        __v: 0
      }
    ];

    service = MockService(ExerciseService);
    service.getExercises = jest.fn().mockReturnValue(of(exercises));
    service.addExercise = jest.fn().mockReturnValue(of(exercises[0]));

    TestBed.configureTestingModule({
      providers: [{ provide: ExerciseService, useValue: service }, HttpClient, HttpHandler]
    });
    service = TestBed.inject(ExerciseService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return a list of exercises", () => {
    let exercises: ExerciseInterface[] = [];

    service.getExercises().subscribe((exercise: ExerciseInterface[]) => {
      exercises = exercise;
    });

    expect(exercises).toHaveLength(3);
  });

  it("should add an exercise", () => {
    const exercise: ExerciseInterface = {
      _id: "61950",
      name: "Bench press",
      description: "Bench press description",
      primaryMuscle: Muscle.CHEST,
      category: ExerciseCategory.BARBELL,
      type: ExerciseType.STRENGTH,
      predefined: true
    };

    service.addExercise(exercise).subscribe((exercise: ExerciseInterface) => {
      expect(exercise).toEqual(exercise);
    });
  });
});
