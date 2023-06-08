import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class TestPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, 'value');
    console.log(metadata, 'metadata');
    // 11 value
    // { metatype: [Function: String], type: 'query', data: 'aaa' } metadata
    return value;
  }
}
