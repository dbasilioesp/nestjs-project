import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/photo.entity';

// mongodb + srv://arethusa:<password>@cluster0-a4cjn.mongodb.net/test

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/aguion-norte',
      entities: [Photo]
    }),
    PhotosModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    })
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule { }
