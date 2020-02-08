import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

// mongodb + srv://arethusa:<password>@cluster0-a4cjn.mongodb.net/test

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://arethusa:arethusa123@cluster0-a4cjn.mongodb.net/test'
    })
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule { }
