import { CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

// 不需要 injectable 会自己导入
export class TestGuard implements CanActivate {
  @Inject(Reflector) reflector: Reflector;
  canActivate(context: ExecutionContext) {
    console.log('guard');
    const classMetadata = this.reflector.get('roles', context.getClass());
    const methodsMetadata = this.reflector.get('roles', context.getHandler());
    console.log('classMetadata', classMetadata);
    console.log('methodsMetadata', methodsMetadata);
    return true;
  }
}
