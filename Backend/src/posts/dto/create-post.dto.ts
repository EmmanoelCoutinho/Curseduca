import { Post } from '../entities/post.entity';

import { IsString, IsNumber } from 'class-validator';

export class CreatePostDto extends Post {
  @IsString()
  title: string;
  @IsString()
  content: string;
  @IsNumber()
  authorId: number;
}
