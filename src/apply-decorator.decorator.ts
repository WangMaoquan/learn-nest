import { applyDecorators, Get, UseGuards } from '@nestjs/common';
import { CustomDecorator } from './custom-decorator.decorator';
import { TestGuardGuard } from './test-guard.guard';

export function applyDecorator(path, role) {
  return applyDecorators(
    Get(path),
    CustomDecorator(role),
    UseGuards(TestGuardGuard),
  );
}
