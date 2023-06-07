import { CallHandler, NestInterceptor } from '@nestjs/common';
import { tap } from 'rxjs';

export class TestInterceptor implements NestInterceptor {
  intercept(context, next: CallHandler) {
    console.log('before....');
    return next.handle().pipe(tap(() => console.log('after..')));
  }
}
