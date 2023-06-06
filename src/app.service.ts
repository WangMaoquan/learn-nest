import { Injectable } from '@nestjs/common';

// 表示 AppService 是可以注入的
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
