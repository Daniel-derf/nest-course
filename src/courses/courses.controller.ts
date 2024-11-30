import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param() { id }) {
    return `Curso ${id}`;
  }
}
