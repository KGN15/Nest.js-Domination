import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll() {
    return 'All Cats';
  }

  findOne(id: string) {
    return `Cat ${id}`;
  }
}
