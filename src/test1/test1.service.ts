import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CreateTest1Dto } from './dto/create-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';

@Injectable()
export class Test1Service
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  create(createTest1Dto: CreateTest1Dto) {
    return 'This action adds a new test1';
  }

  findAll() {
    return `This action returns all test1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test1`;
  }

  update(id: number, updateTest1Dto: UpdateTest1Dto) {
    return `This action updates a #${id} test1`;
  }

  remove(id: number) {
    return `This action removes a #${id} test1`;
  }

  onModuleInit() {
    console.log('test1Service module init');
  }

  onApplicationBootstrap() {
    console.log('test1Service application bootstrap');
  }

  onModuleDestroy() {
    console.log('test1Service module destroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('test1Service before application shutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('test1Service application shutdown', signal);
  }
}
