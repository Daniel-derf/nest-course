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
import { UpdateCourseDto } from './dto/updateCourse.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll(@Res() response) {
    const data = this.courseService.getCourses();
    return response.status(200).json({ data });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const data = this.courseService.getOneCourse(+id);
    return { data };
  }

  @Post()
  create(@Body() body) {
    const createdCourse = this.courseService.createCourse(body);
    return { data: createdCourse };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.updateCourse(+id, updateCourseDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const removedCourse = this.courseService.deleteCourse(+id);

    return removedCourse;
  }
}
