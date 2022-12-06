import { Test, TestingModule } from '@nestjs/testing';
import { GroupWorkoutService } from './group-workout.service';

describe('GroupWorkoutService', () => {
  let service: GroupWorkoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupWorkoutService],
    }).compile();

    service = module.get<GroupWorkoutService>(GroupWorkoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
