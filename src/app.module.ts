import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';
import { BController } from './b/b/b.controller';
import { BController as BController1 } from './b/b.controller';

@Module({
  imports: [ModuleAModule, ModuleBModule],
  controllers: [AppController, BController, BController1],
  providers: [AppService],
})
export class AppModule {}
