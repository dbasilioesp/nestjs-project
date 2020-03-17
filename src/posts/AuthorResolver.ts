import { Resolver, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { Query } from "@nestjs/common";
import { AuthorsService, PostsService } from "./posts.service";

@Resolver("Author")
export class AuthorResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService
  ) {}

  async author(@Args("id") id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveProperty()
  async posts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
