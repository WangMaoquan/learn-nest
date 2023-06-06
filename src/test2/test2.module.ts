import {
  Module,
  OnApplicationBootstrap,
  OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Test2Service } from './test2.service';
import { Test2Controller } from './test2.controller';

@Module({
  controllers: [Test2Controller],
  providers: [Test2Service],
})
export class Test2Module
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('test2Module module init');
  }
  onApplicationBootstrap() {
    console.log('test2Module application bootstrap');
  }

  onModuleDestroy() {
    console.log('test2Module module destroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('test2Module before application shutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('test2Module application shutdown', signal);
  }
}
