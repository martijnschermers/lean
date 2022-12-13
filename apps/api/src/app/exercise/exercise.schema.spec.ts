import { disconnect, Model } from "mongoose";
import { Exercise, ExerciseDocument, ExerciseSchema } from "./exercise.schema";
import { Test } from "@nestjs/testing";
import { getModelToken, MongooseModule } from "@nestjs/mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

describe("Exercise Schema", () => {
  let mongo: MongoMemoryServer;
  let exerciseModel: Model<ExerciseDocument>;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => {
            mongo = await MongoMemoryServer.create();
            const uri = mongo.getUri();
            return { uri };
          }
        }),
        MongooseModule.forFeature([{ name: Exercise.name, schema: ExerciseSchema }])
      ]
    }).compile();

    exerciseModel = app.get<Model<ExerciseDocument>>(getModelToken(Exercise.name));

    await exerciseModel.ensureIndexes();
  });

  afterAll(async () => {
    await disconnect();
    await mongo.stop();
  });

  it('has a required name', () => {
    const model = new exerciseModel();

    const err = model.validateSync();

    expect(err.errors.name.message).toEqual('Path `name` is required.');
  });

  it('has a category of enum ExerciseCategory', async () => {
    const model = new exerciseModel({ name: "Test", category: "INVALID" });

    const err = model.validateSync();

    await expect(err.errors.category.message).toEqual('`INVALID` is not a valid enum value for path `category`.');
  });

  it('has a required description', async () => {
    const model = new exerciseModel({ name: "Test" });

    const err = model.validateSync();

    await expect(err.errors.description.message).toEqual('Path `description` is required.');
  })
});
