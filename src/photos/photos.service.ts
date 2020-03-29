import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Photo } from "./photo.entity";
import { Repository } from "typeorm";

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>
  ) { }

  getId(id: string): Promise<Photo> {
    return this.photoRepository.findOne(id);
  }

  findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}
