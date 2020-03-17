import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { CatsController } from "./cats.controller";
import { Photo } from "./photos/photo.entity";
import { PhotosModule } from "./photos/photos.module";
import { UsersModule } from "./users/users.module";
import { PostsController } from "./posts/posts.controller";
import { PostsModule } from "./posts/posts.module";
import { Author, Post } from "./posts/Post.entity";

const CONNECTION = `mongodb+srv://arethusa:arethusa123@cluster0-a4cjn.mongodb.net/my-sample`;
// const CONNECTION = `mongodb://localhost:27017/aguion-norte`;

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: CONNECTION,
      entities: [Photo],
      useUnifiedTopology: true
    }),
    PhotosModule,
    GraphQLModule.forRoot({
      typePaths: ["./**/*.graphql"]
    })
  ],
  controllers: [AppController, CatsController],
  providers: [AppService]
})
export class AppModule { }
