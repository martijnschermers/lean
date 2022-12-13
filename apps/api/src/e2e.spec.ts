import request = require("supertest");
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./app/auth/auth.module";
import { INestApplication, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { MongoMemoryServer } from "mongodb-memory-server";
import { TokenMiddleware } from "./app/auth/token.middleware";
import { RouterModule } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { MongoClient } from "mongodb";
import { disconnect } from "mongoose";
import { UserCredentials, UserRegistration } from "@lean/api-interfaces";
import { ExerciseModule } from "./app/exercise/exercise.module";
import { Neo4jModule } from "nest-neo4j/dist";
import { ConfigModule } from "@nestjs/config";

let mongod: MongoMemoryServer;
let uri: string;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "apps/api/.env"
    }),
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
    AuthModule,
    ExerciseModule,
    RouterModule.register([
      {
        path: "exercise",
        module: ExerciseModule
      }
    ])
  ],
  controllers: [],
  providers: []
})
export class TestAppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude(
        { path: "api/login", method: RequestMethod.POST },
        { path: "api/register", method: RequestMethod.POST }
      )
      .forRoutes(
        "exercise"
      );
  }
}

describe("ExerciseController (e2e)", () => {
  let app: INestApplication;
  let server;
  let module: TestingModule;
  let mongoc: MongoClient;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [TestAppModule]
    })
      .compile();

    app = module.createNestApplication();
    app.setGlobalPrefix("api");
    await app.init();

    mongoc = new MongoClient(uri);
    await mongoc.connect();

    server = app.getHttpServer();
  });

  beforeEach(async () => {
    await mongoc.db("test").collection("identities").deleteMany({});
    await mongoc.db("test").collection("users").deleteMany({});
    await mongoc.db("test").collection("exercises").deleteMany({});
  });

  afterAll(async () => {
    await mongoc.close();
    await disconnect();
    await mongod.stop();
  });

  describe("single user", () => {
    let credentials: UserRegistration;
    let login: UserCredentials;

    beforeEach(() => {
      credentials = {
        username: "user",
        password: "password123!",
        repeatPassword: "password123!",
        email: "user@gmail.com"
      };

      login = {
        email: "user@gmail.com",
        password: "password123!"
      };
    });

    it("a user registers, logs in, and has no exercises", async () => {
      const register = await request(server)
        .post("/api/register")
        .send(credentials);

      expect(register.status).toBe(201);
      expect(register.body).toHaveProperty("_id");
      expect(register.body).toHaveProperty("email");
      expect(register.body).toHaveProperty("username");

      const loginRequest = await request(server)
        .post("/api/login")
        .send(login);

      expect(loginRequest.status).toBe(201);
      expect(loginRequest.body).toHaveProperty("token");

      const token = loginRequest.body.token;

      const exercises = await request(server)
        .get("/api/exercise")
        .set("authorization", token);

      expect(exercises.status).toBe(200);
      expect(exercises.body).toEqual([]);
    });

    it("a user registers, logs in, and creates an exercise", async () => {
      const register = await request(server)
        .post("/api/register")
        .send(credentials);

      expect(register.status).toBe(201);
      expect(register.body).toHaveProperty("_id");
      expect(register.body).toHaveProperty("email");
      expect(register.body).toHaveProperty("username");

      const loginRequest = await request(server)
        .post("/api/login")
        .send(login);

      expect(loginRequest.status).toBe(201);
      expect(loginRequest.body).toHaveProperty("token");

      const token = loginRequest.body.token;

      const exercise = {
        name: "Bench Press",
        description: "Bench Press Description",
        type: "Strength",
        category: "Barbell",
        primaryMuscle: "Chest"
      };

      const createExercise = await request(server)
        .post("/api/exercise")
        .set("authorization", token)
        .send(exercise);

      expect(createExercise.status).toBe(201);
      expect(createExercise.body).toHaveProperty("_id");
      expect(createExercise.body).toHaveProperty("name");
      expect(createExercise.body).toHaveProperty("description");
      expect(createExercise.body).toHaveProperty("type");
      expect(createExercise.body).toHaveProperty("category");
      expect(createExercise.body).toHaveProperty("primaryMuscle");

      const exercises = await request(server)
        .get("/api/exercise")
        .set("authorization", token);

      expect(exercises.status).toBe(200);
      expect(exercises.body).toHaveLength(1);
    });

    it("a user registers, logs in, creates an exercise, and retrieves it", async () => {
      const register = await request(server)
        .post("/api/register")
        .send(credentials);

      expect(register.status).toBe(201);
      expect(register.body).toHaveProperty("_id");
      expect(register.body).toHaveProperty("email");
      expect(register.body).toHaveProperty("username");

      const loginRequest = await request(server)
        .post("/api/login")
        .send(login);

      expect(loginRequest.status).toBe(201);
      expect(loginRequest.body).toHaveProperty("token");

      const token = loginRequest.body.token;

      const exercise = {
        name: "Bench Press",
        description: "Bench Press Description",
        type: "Strength",
        category: "Barbell",
        primaryMuscle: "Chest"
      };

      const createExercise = await request(server)
        .post("/api/exercise")
        .set("authorization", token)
        .send(exercise);

      expect(createExercise.status).toBe(201);

      const exerciseId = createExercise.body._id;
      const exerciseById = await request(server)
        .get(`/api/exercise/${exerciseId}`)
        .set("authorization", token);

      expect(exerciseById.status).toBe(200);
      expect(exerciseById.body).toHaveProperty("_id");
      expect(exerciseById.body).toHaveProperty("name");
      expect(exerciseById.body).toHaveProperty("description");
      expect(exerciseById.body).toHaveProperty("type");
      expect(exerciseById.body).toHaveProperty("category");
      expect(exerciseById.body).toHaveProperty("primaryMuscle");
    });
  });
});
