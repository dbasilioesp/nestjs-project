import { Controller, Get, Param } from '@nestjs/common';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {

  constructor(
    private readonly photoService: PhotosService
  ){}

  @Get()
  async listPhotos() {
    return this.photoService.findAll();
  }

  @Get(':id')
  async getPhoto(@Param() params) {
    return this.photoService.getId(params.id);
  }

}
