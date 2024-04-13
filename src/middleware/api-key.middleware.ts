// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class ApiKeyMiddleware implements NestMiddleware {
//   private readonly validApiKey = process.env.API_KEY;

//   use(req: Request, res: Response, next: NextFunction) {
//     const apiKey = req.headers['api-key'];
//     if (apiKey !== this.validApiKey) {
//       return res.status(401).json({ message: 'Invalid API key' });
//     }
//     next();
//   }
// }
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyMiddleware implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const apiKey = request.headers['api-key']; // give the name you want

    if (!apiKey) {
      throw new UnauthorizedException('API key is missing.');
    }

    // call your env. var the name you want
    if (apiKey !== process.env.API_KEY) {
      throw new UnauthorizedException('Invalid API key.');
    }

    return true;
  }
}
