import configuration from './config/configuration';
import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { Photo } from "./photos/photo.entity";
import { PhotosModule } from "./photos/photos.module";
import { UsersModule } from "./users/users.module";
import { CharactersModule } from './characters/characters.module';
import { Character } from "./characters/character.entity";

const CONNECTION = `mongodb+srv://arethusa:arethusa123@cluster0-a4cjn.mongodb.net/my-sample`;

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: CONNECTION,
      entities: [Photo, Character],
      useUnifiedTopology: true
    }),
    PhotosModule,
    GraphQLModule.forRoot({
      typePaths: ["./**/*.graphql"]
    }),
    AuthModule,
    UsersModule,
    CharactersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
