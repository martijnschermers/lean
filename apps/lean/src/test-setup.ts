import "jest-preset-angular/setup-jest";
import { ngMocks } from "ng-mocks";

ngMocks.autoSpy("jest");

// ngMocks.defaultMock(ExerciseService, () => ({
//   getExercises: jest.fn().mockReturnValue(of(exercises)),
// }));
