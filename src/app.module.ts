import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'decade',
      useValue: {
        name: 'decade',
        age: 20,
      },
    },
  ],
})
export class AppModule {}
