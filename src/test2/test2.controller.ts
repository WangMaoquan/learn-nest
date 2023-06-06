import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnApplicationBootstrap,
  OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Test2Service } from './test2.service';
import { CreateTest2Dto } from './dto/create-test2.dto';
import { UpdateTest2Dto } from './dto/update-test2.dto';

@Controller('test2')
export class Test2Controller
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly test2Service: Test2Service) {}

  @Post()
  create(@Body() createTest2Dto: CreateTest2Dto) {
    return this.test2Service.create(createTest2Dto);
  }

  @Get()
  findAll() {
    return this.test2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.test2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTest2Dto: UpdateTest2Dto) {
    return this.test2Service.update(+id, updateTest2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.test2Service.remove(+id);
  }

  onModuleInit() {
    console.log('test2Controller module init');
  }

  onApplicationBootstrap() {
    console.log('test2Controller application bootstrap');
  }

  onModuleDestroy() {
    console.log('test2Controller module destroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('test2Controller before application shutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('test2Controller application shutdown', signal);
  }
}
