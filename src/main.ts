import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'decade',
      cookie: {
        maxAge: 10000,
      },
    }),
  );
  // 指定静态资源的路径和模版的路径
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // 指定模版引擎为 handlerbars
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
