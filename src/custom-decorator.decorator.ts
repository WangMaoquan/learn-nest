import { SetMetadata } from '@nestjs/common';

/**
 * 这么就能更加直观的 分类 setMetadata 的业务
 */

export const CustomDecorator = (...args: string[]) =>
  SetMetadata('custom-decorator', args);
