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
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class ApiKeyMiddleware extends PassportStrategy(HeaderAPIKeyStrategy) {
  constructor(private authService: AuthService) {
    super({ header: 'apiKey', prefix: '' }, true, (apikey, done) => {
      const checkKey = authService.validateApiKey(apikey);
      if (!checkKey) {
        return done(false);
      }
      return done(true);
    });
  }
}
