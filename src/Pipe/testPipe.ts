import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class TestPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
