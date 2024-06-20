import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  private readonly validApiKey = process.env.API_KEY;

  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['api-key'];
    if (apiKey !== this.validApiKey) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'API key inválida' });
    }
    next();
  }
}
