import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const TestDecade = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    // data 是接收的参数 ctx 是ExecutionContext 可以取出 request response
    return 'decade';
  },
);

export const myHeaders = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return key ? request.headers[key] : request.headers;
  },
);

export const MyQuery = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.query[key];
  },
);
