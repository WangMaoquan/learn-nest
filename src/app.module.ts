import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test1Module } from './test1/test1.module';
import { Test2Module } from './test2/test2.module';

@Module({
  imports: [Test2Module, Test1Module], // 从左往右开始的
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
