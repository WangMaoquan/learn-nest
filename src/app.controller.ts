import {
  Body,
  Controller,
  Delete,
  Get,
  Head,
  Header,
  Headers,
  HostParam,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Ip,
  Next,
  Optional,
  Options,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Redirect,
  Render,
  Req,
  Res,
  Session,
  SetMetadata,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestFilter } from './Filters/testFilters';
import { TestGuard } from './Guard/testGuard';
import { TestInterceptor } from './Interceptor/testInterceptor';
import { TestPipe } from './Pipe/testPipe';
import { AaaDto } from './AaaDto';
import { NextFunction, Request, Response } from 'express';

@Controller({
  path: 'aaa', // 指定 /aaa 开头
  host: ':host.0.0.1',
})
@SetMetadata('roles', ['user'])
export class AppController {
  constructor(@Optional() private readonly appService: AppService) {}
  @Inject('decade')
  decade: { name: string; age: number };
  @Get('/testParams/:bbb')
  @UseFilters(TestFilter)
  @UseGuards(TestGuard)
  @UseInterceptors(TestInterceptor)
  @UsePipes(TestPipe)
  @SetMetadata('roles', ['admin'])
  getHello(
    @Param('bbb', ParseIntPipe) bbb: number,
    @Query('aaa', ParseBoolPipe) aaa: boolean,
  ): string {
    console.log('aaa', aaa);
    console.log('bbb', bbb);
    throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    return this.appService.getHello();
  }

  @Get('/head')
  header(
    @Headers('accept') accept: string,
    @Headers() headers: Record<string, any>,
  ) {
    console.log(accept, 'accept');
    console.log(headers);
    return 'head';
  }

  @Post('/aaa')
  getHello1(@Body() aaa: AaaDto) {
    console.log('aaa', aaa);
    return aaa.a;
  }

  @Put()
  getHello4() {
    return 'hello4';
  }

  @Delete()
  getHello5() {
    return 'hello4';
  }
  @Head()
  getHello6() {
    return 'hello4';
  }
  @Options()
  getHello7() {
    return 'hello4';
  }
  @Patch()
  getHello8() {
    return 'hello4';
  }

  @Get('/ip')
  getIp(@Ip() ip: string) {
    return ip;
  }

  // 需要安装 express-session
  @Get('/session')
  getSession(@Session() session: string) {
    return session;
  }

  @Get('/host')
  getHost(@HostParam('host') host) {
    return host;
  }

  @Get('/req')
  getReq(@Req() req: Request) {
    return req.hostname;
  }

  // 当你注入 response 对象之后, 服务器会一直没有响应
  // 因为这时候 Nest 就不会再把 handler 返回值作为响应内容了
  @Get('/res')
  getRes(@Res() res: Response) {
    console.log(res);
    res.end('res end'); // 你可以自己返回响应
  }

  @Get('/res1')
  // 可以通过 {passthrough: true} 告诉 nest 使用 handler
  getRes1(@Res({ passthrough: true }) res: Response) {
    return 'res end 1';
  }

  // 除了注入 @Res 不会返回响应外, 注入 @Next 也不会
  // Nest 不会处理注入 @Next 的 handler 的返回值
  @Get('/next')
  getNest(@Next() next: NextFunction) {
    console.log('next1');
    next();
    return 'next 2';
  }

  // 当你有两个 handler 来处理同一个路由的时候, 可以在第一个 handler 里注入 next, 调用它来把请求转发到第二个 handler
  @Get('/next')
  getNext1() {
    console.log('next 2 handler');
    return 'getNext1';
  }

  @Get('/httpCode')
  @HttpCode(222)
  getHttpCode() {
    return 'code 222';
  }

  @Get('/responseHeader')
  @Header('aaa', 'decade') // 新增响应头
  getResponseHeader() {
    return 'get response header';
  }

  @Get('/redirect')
  @Redirect('https://www.baidu.com') // 重定向
  getRedirct() {}

  // 需要指定指定静态资源的路径和模版的路径，并指定模版引擎为 handlerbars
  @Get('/user')
  @Render('user') // 指定渲染模板
  user() {
    // 指定数据
    return {
      name: 'decade',
      age: 20,
    };
  }
}
