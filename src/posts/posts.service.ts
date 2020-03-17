import { Injectable } from "@nestjs/common";
import { Author, Post } from "./Post.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>
  ) {}

  findAll(predicate) {
    return this.postsRepository.find(predicate);
  }
}

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>
  ) {}

  findOneById(id: number): Promise<any> {
    return this.authorRepository.findOne(id);
  }
}
