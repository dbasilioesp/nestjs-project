import config from "./config/configuration";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { CharactersModule } from "./characters/characters.module";
import { Character } from "./characters/character.entity";
import { User } from "./users/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: config.database,
      entities: [Character, User],
      useUnifiedTopology: true,
      loggerLevel: "debug"
    }),
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
export class AppModule {}
