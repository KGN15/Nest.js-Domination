import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`→ [REQUEST] ${req.method} ${req.url}`);

    res.on('finish', () => {
      console.log(`← ${req.method} ${req.url} ${res.statusCode}`);
    });

    next();
  }
}
