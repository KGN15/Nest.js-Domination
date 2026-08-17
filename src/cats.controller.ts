// cats.controller.ts file codebase
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

interface CreateCatPayload {
  name: string;
}

@Controller('cats')
export class CatController {
  @Get()
  findAll() {
    return 'All Cats';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Cat ${id}`;
  }

  @Post()
  create(@Body() body: CreateCatPayload) {
    return `Created Name ${body.name}`;
  }
}
