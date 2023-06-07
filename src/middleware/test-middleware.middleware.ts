import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from 'src/app.service';

@Injectable()
export class TestMiddlewareMiddleware implements NestMiddleware {
  @Inject(AppService) private readonly appService: AppService;
  use(req: Request, res: Response, next: () => void) {
    console.log('before');
    this.appService.getHello();
    next();
    console.log('after');
  }
}
