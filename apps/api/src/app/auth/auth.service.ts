import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { hash, compare } from "bcrypt";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { User } from "@lean/api-interfaces";
import { Identity } from "./identity.schema";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel("Identity") private identityModel: Model<Identity>,
    @InjectModel("User") private userModel: Model<User>
  ) {
  }

  async createUser(username: string, email: string): Promise<string> {
    const user = new this.userModel({ username, email });
    await user.save();
    return user.id;
  }

  async verifyToken(token: string): Promise<string | JwtPayload> {
    return new Promise((resolve, reject) => {
      verify(token.substring(7), process.env.JWT_SECRET, (err, payload) => {
        if (err) reject(err);
        else resolve(payload);
      });
    });
  }

  async registerUser(username: string, password: string, email: string) {
    const generatedHash = await hash(password, parseInt(process.env.SALT_ROUNDS, 10));

    const identity = new this.identityModel({ username, hash: generatedHash, email });
    console.log(identity);

    await identity.save();
  }

  async generateToken(username: string, password: string): Promise<string> {
    const identity = await this.identityModel.findOne({ username });

    if (!identity || !(await compare(password, identity.hash))) throw new Error("User is not authorized");

    const user = await this.userModel.findOne({ name: username });

    return new Promise((resolve, reject) => {
      sign({ username, id: user.id }, process.env.JWT_SECRET, (err: Error, token: string) => {
        if (err) reject(err);
        else resolve(token);
      });
    });
  }
}
