import { Module } from "@nestjs/common";
import { Photo } from "./photo.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PhotosService } from "./photos.service";
import { PhotosController } from "./photos.controller";
import { PhotoResolver } from "./PhotoResolver";

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotosService, PhotoResolver],
  controllers: [PhotosController]
})
export class PhotosModule {}
