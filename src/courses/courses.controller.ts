import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoursesService } from 'src/courses/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ message: 'Listagem de cursos' });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  @Get(':id/:name')
  findOneName(@Param('id') id: string, @Param('name') name: string) {
    return `Curso ${id} ${name}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Update course with ID ${id}`;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Delete course with ID ${id}`;
  }
}
