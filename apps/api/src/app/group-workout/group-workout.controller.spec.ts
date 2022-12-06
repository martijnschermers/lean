import { Test, TestingModule } from '@nestjs/testing';
import { GroupWorkoutController } from './group-workout.controller';

describe('GroupWorkoutController', () => {
  let controller: GroupWorkoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupWorkoutController],
    }).compile();

    controller = module.get<GroupWorkoutController>(GroupWorkoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
