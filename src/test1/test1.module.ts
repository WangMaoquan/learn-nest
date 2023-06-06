import {
  Module,
  OnApplicationBootstrap,
  OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Test1Service } from './test1.service';
import { Test1Controller } from './test1.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [Test1Controller],
  providers: [Test1Service],
})
export class Test1Module
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('test1Module module init');
  }
  onApplicationBootstrap() {
    console.log('test1Module application bootstrap');
  }

  onModuleDestroy() {
    console.log('test1Module module destroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('test1Module before application shutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    const test1Service = this.moduleRef.get(Test1Service);
    console.log('-------------------------------', test1Service.findAll());
    console.log('test1Module application shutdown', signal);
  }
}
