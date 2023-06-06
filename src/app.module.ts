import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProviderModule } from './test-provider/test-provider.module';

@Module({
  imports: [TestProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
