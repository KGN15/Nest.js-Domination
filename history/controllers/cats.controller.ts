import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'All Cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Cat ${id}`;
  }
}
