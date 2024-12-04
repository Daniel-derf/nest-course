import { IsString, IsInt } from 'class-validator';

export class CreateCourseDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString({ each: true })
  tags: string[];
}
