import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header("authorization");

    if (!authHeader) {
      throw new UnauthorizedException("No authorization header provided");
    }

    try {
      res.locals.token = await this.authService.verifyToken(authHeader);
    } catch (e) {
      console.log(e)
      throw new UnauthorizedException("Token is invalid");
    }

    next();
  }
}
