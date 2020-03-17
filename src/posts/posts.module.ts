import { Module } from "@nestjs/common";
import { PostsService, AuthorsService } from "./posts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post, Author } from "./Post.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Post, Author])],
  providers: [PostsService, AuthorsService]
})
export class PostsModule {}
