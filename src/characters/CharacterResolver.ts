import { Resolver, Args, Query, Mutation } from "@nestjs/graphql";
import { CharactersService } from "./characters.service";
import { Character } from "./character.entity";

@Resolver("Character")
export class CharacterResolver {
  constructor(private readonly charactersService: CharactersService) { }

  @Query()
  async character(@Args("id") id: number) {
    return this.charactersService.getById(id);
  }

  @Query()
  async characterByName(@Args("name") name: string) {
    return this.charactersService.getByName(name);
  }

  @Mutation()
  async create(
    @Args("name") name: string,
    @Args("description") description: string
  ) {
    return this.charactersService.create({ name, description } as Character);
  }
}
