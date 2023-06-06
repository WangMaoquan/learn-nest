import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Test1Service } from './test1.service';
import { CreateTest1Dto } from './dto/create-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';

@Controller('test1')
export class Test1Controller
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly test1Service: Test1Service) {}

  @Post()
  create(@Body() createTest1Dto: CreateTest1Dto) {
    return this.test1Service.create(createTest1Dto);
  }

  @Get()
  findAll() {
    return this.test1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.test1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTest1Dto: UpdateTest1Dto) {
    return this.test1Service.update(+id, updateTest1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.test1Service.remove(+id);
  }

  onModuleInit() {
    console.log('test1Controller module init');
  }

  onApplicationBootstrap() {
    console.log('test1Controller application bootstrap');
  }

  onModuleDestroy() {
    console.log('test1Controller module destroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('test1Controller before application shutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('test1Controller application shutdown', signal);
  }
}
