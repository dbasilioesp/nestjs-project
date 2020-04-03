import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveProperty
} from "@nestjs/graphql";
import { CharactersService } from "./characters.service";
import { Character } from "./character.entity";

@Resolver("Character")
export class CharacterResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query()
  async character(@Args("id") id: number) {
    return this.charactersService.getById(id);
  }

  @Query()
  async characterByName(@Args("name") name: string) {
    return this.charactersService.getByName(name);
  }

  @Query()
  async characters() {
    const records = await this.charactersService.findAll();
    return { records };
  }

  @Mutation()
  async createCharacter(
    @Args("name") name: string,
    @Args("description") description: string
  ) {
    return this.charactersService.create({ name, description } as Character);
  }

  @Mutation()
  async updateCharacter(
    @Args("id") id: string,
    @Args("name") name: string,
    @Args("description") description: string
  ) {
    return this.charactersService.update(id, {
      name,
      description
    } as Character);
  }
}
