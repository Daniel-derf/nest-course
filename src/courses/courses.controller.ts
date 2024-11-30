import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  @Get(':id/:name')
  findOneName(@Param('id') id: string, @Param('name') name: string) {
    return `Curso ${id} ${name}`;
  }

  @HttpCode(204)
  @Post()
  create(@Body() body) {
    return body;
  }
}
