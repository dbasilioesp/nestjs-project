import { Resolver, Args, Query } from "@nestjs/graphql";
import { PhotosService } from "./photos.service";

@Resolver("Photo")
export class PhotoResolver {
  constructor(private readonly photosService: PhotosService) { }

  @Query()
  async photo(@Args("id") id: string) {
    return this.photosService.getId(id);
  }
}
