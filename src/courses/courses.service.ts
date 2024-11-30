import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { CreateCourseDto } from './dto/createCourse.dto';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJS',
      description: 'Curso sobre fundamentos do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
    },
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getOneCourse(id: number): Course {
    return this.courses.find((c) => c.id === id);
  }

  createCourse({ name, description, tags }): Course {
    const newCourse: CreateCourseDto = {
      id: this.courses[this.courses.length - 1].id + 1,
      name,
      description,
      tags,
    };

    this.courses.push(newCourse);

    return newCourse;
  }

  updateCourse(id: number, updateCourseDto: UpdateCourseDto) {
    const courseIndex = this.courses.findIndex((course) => course.id === id);

    if (courseIndex === -1) {
      throw new Error(`Course with ID ${id} not found`);
    }

    this.courses[courseIndex] = {
      ...this.courses[courseIndex],
      ...updateCourseDto,
    };

    return this.courses[courseIndex];
  }

  deleteCourse(id: number) {
    const deletedCourse = this.courses.find((c) => c.id === id);

    this.courses = this.courses.filter((c) => c.id !== id);

    return deletedCourse;
  }
}
