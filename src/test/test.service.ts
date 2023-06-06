import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  findAll() {
    return `This action returns all test`;
  }
}
