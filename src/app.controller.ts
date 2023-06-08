import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
  ParseFloatPipe,
  ParseBoolPipe,
  ParseArrayPipe,
  ParseEnumPipe,
  ParseUUIDPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestPipe } from './testPipe';

enum TestEnum {
  aaa = '111',
  bbb = '222',
  ccc = '333',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // 默认获取的就是 字符串 所以我们不需要改变
  getHello(@Param('aaa') aaa: string): string {
    return aaa;
  }

  @Get('/hello1/:aaa')
  // 这里我们使用 ParseIntPipe 就会校验 aaa 是否是数字
  // 如果我们传入 xxx 这种不能转换成数字的就会抛出异常
  // {
  // "statusCode": 400,
  // "message": "Validation failed (numeric string is expected)",
  // "error": "Bad Request"
  // }
  getHello1(@Param('aaa', ParseIntPipe) aaa: string): string {
    return aaa;
  }

  // 当然我们可以修改 statusCode 通过的是 errorHttpStatusCode
  // 修改meesage 就是我们重修 抛出 httpExecption
  @Get('/hello2')
  getHello2(
    @Query(
      'aaa',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
        exceptionFactory(error) {
          console.log(error);
          // 这里我们也可以自己抛出异常来 使用ExecptionFilter 处理
          throw new HttpException('hello2' + error, HttpStatus.NOT_IMPLEMENTED);
        },
      }),
    )
    aaa: number,
  ) {
    return aaa + 1;
  }

  @Get('/hello3')
  getHello3(@Query('aaa', ParseFloatPipe) aaa: string): string {
    return aaa;
  }

  @Get('/hello4')
  getHello4(@Query('aaa', ParseBoolPipe) aaa: boolean): boolean {
    return aaa;
  }

  // 使用 ParseArrayPipe 需要结合 class-validator,  class-transformer 这两个包
  // 这时取出来的 数组里面其实是字符串, 所以我们还需要 给 ParseArrayPipe 传入 options
  @Get('/hello5') // http://localhost:3000/hello5?aaa=1,%202,%203
  getHello5(
    @Query(
      'aaa',
      new ParseArrayPipe({
        items: Number,
        separator: '..', // 指定分隔符 1..2..3
        optional: true, // 指定可选
      }),
    )
    aaa: number[],
  ): number[] {
    return aaa;
  }

  // ParseEnumPipe 好像只能 new
  // 会校验 aaa 是不是 TestEnum
  @Get('/hello6')
  getHello6(@Query('aaa', new ParseEnumPipe(TestEnum)) aaa: TestEnum) {
    return aaa;
  }

  // ParseUUIDPipe 会校验是否是 uuid
  @Get('/hello7')
  getHello7(@Query('aaa', ParseUUIDPipe) aaa: string) {
    return aaa;
  }

  // DefaultValuePipe 指定默认值
  @Get('/hello8')
  getHello8(@Query('aaa', new DefaultValuePipe('aaa')) aaa: string) {
    return aaa;
  }

  // 使用自定义的 pipe
  @Get('/hello9')
  getHello9(@Query('aaa', TestPipe) aaa: string) {
    return aaa;
  }
}
