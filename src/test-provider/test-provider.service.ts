import { Injectable } from '@nestjs/common';

@Injectable()
export class TestProviderService {
  getInfo(): string {
    return 'test provider service';
  }
}
