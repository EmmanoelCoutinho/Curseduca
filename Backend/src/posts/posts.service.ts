import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    const data = { ...createPostDto };
    const createdPost = this.prisma.post.create({ data });

    return createdPost;
  }

  getAll() {
    return this.prisma.post.findMany();
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({ where: { id }, data: updatePostDto });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
