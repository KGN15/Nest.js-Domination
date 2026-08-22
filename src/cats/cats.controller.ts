import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'All Cats';
  }
  @UseFilters(HttpExceptionFilter)
  @Get(':id')
  findOne(@Param('id') id: string) {
    if (id !== '1') {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return 'Cat 1';
  }
}
