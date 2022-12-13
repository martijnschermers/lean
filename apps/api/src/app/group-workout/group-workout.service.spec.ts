import { Test } from "@nestjs/testing";
import { disconnect, Model } from "mongoose";
import { User, UserDocument, UserSchema } from "../user/user.schema";
import { getModelToken, MongooseModule } from "@nestjs/mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";
import { UserService } from "../user/user.service";
import { GroupWorkoutService } from "./group-workout.service";
import { GroupWorkout, GroupWorkoutDocument, GroupWorkoutSchema } from "./group-workout.schema";
import { Neo4jModule } from "nest-neo4j/dist";

describe("GroupWorkoutService", () => {
  let service: GroupWorkoutService;
  let mongod: MongoMemoryServer;
  let mongoc: MongoClient;

  let groupWorkoutModel: Model<GroupWorkoutDocument>;
  let userModel: Model<UserDocument>;

  beforeAll(async () => {
    let uri: string;

    jest.mock("neo4j-driver/lib/driver");

    const app = await Test.createTestingModule({
      imports: [
        Neo4jModule.forRoot({
          scheme: "bolt",
          host: "localhost",
          port: 7687,
          username: "neo4j",
          password: "neox"
        }),
        MongooseModule.forRootAsync({
          useFactory: async () => {
            mongod = await MongoMemoryServer.create();
            uri = mongod.getUri();
            return { uri };
          }
        }),
        MongooseModule.forFeature([{ name: GroupWorkout.name, schema: GroupWorkoutSchema }]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
      ],
      providers: [GroupWorkoutService, UserService]
    }).compile();

    service = app.get<GroupWorkoutService>(GroupWorkoutService);

    groupWorkoutModel = app.get<Model<GroupWorkoutDocument>>(getModelToken(GroupWorkout.name));
    userModel = app.get<Model<UserDocument>>(getModelToken(User.name));

    await groupWorkoutModel.ensureIndexes();
    await userModel.ensureIndexes();

    mongoc = new MongoClient(uri);
    await mongoc.connect();
  });

  beforeEach(async () => {
    await mongoc.db("test").collection("groupworkouts").deleteMany({});
    await mongoc.db("test").collection("users").deleteMany({});
  });

  afterAll(async () => {
    await mongoc.close();
    await disconnect();
    await mongod.stop();
  });

  describe("service crud", () => {
    const testUser = {
      id: "l1234",
      username: "luigi",
      email: "luigi@luigi.it",
      admin: false,
      workouts: [],
      groupWorkouts: []
    };
    const testWorkout = {
      name: "test",
      date: new Date(12, 3, 2003),
      duration: "01:00:10",
      location: "test",
      exercises: []
    };

    it("should return a list of group workouts", async () => {
      const groupWorkout = await service.addGroupWorkout(testWorkout);

      const groupWorkouts = await service.findAll();

      expect(groupWorkouts[0]).toHaveProperty("name", groupWorkout.name);
    });

    it("should add a workout", async () => {
      await service.addGroupWorkout(testWorkout);

      const groupWorkouts = await mongoc.db("test").collection("groupworkouts").find().toArray();

      expect(groupWorkouts[0]).toHaveProperty("name", testWorkout.name);
    });

    it("should join a workout", async () => {
      const user = await userModel.create(testUser);
      const groupWorkout = await service.addGroupWorkout(testWorkout);

      await service.joinGroupWorkout(user["_id"], groupWorkout["_id"]);

      const updatedUser = await userModel.findById(user["_id"]);

      expect(updatedUser.groupWorkouts[0]).toHaveProperty("name", groupWorkout.name);
    });
  });
});

