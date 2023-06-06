import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CreateTest2Dto } from './dto/create-test2.dto';
import { UpdateTest2Dto } from './dto/update-test2.dto';

@Injectable()
export class Test2Service
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  create(createTest2Dto: CreateTest2Dto) {
    return 'This action adds a new test2';
  }

  findAll() {
    return `This action returns all test2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test2`;
  }

  update(id: number, updateTest2Dto: UpdateTest2Dto) {
    return `This action updates a #${id} test2`;
  }

  remove(id: number) {
    return `This action removes a #${id} test2`;
  }

  onModuleInit() {
    console.log('test2Service module init');
  }

  onApplicationBootstrap() {
    console.log('test2Service application bootstrap');
  }

  onModuleDestroy() {
    console.log('test2Service module destroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('test2Service before application shutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('test2Service application shutdown', signal);
  }
}
