import { Injectable } from '@nestjs/common';

@Injectable()
export class TestProviderService {
  getInfo(): string {
    return 'test provider service';
  }
  getPersonInfo({ name, age }: { name: string; age: number }) {
    return `my name is ${name}, age is ${age}`;
  }
  getAge() {
    return 20;
  }
}
