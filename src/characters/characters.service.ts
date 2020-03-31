import { Injectable } from '@nestjs/common';
import { Character } from './character.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';


@Injectable()
export class CharactersService {

  constructor(
    @InjectRepository(Character)
    private readonly characterRepository: Repository<Character>
  ) { }

  getById(id: number | string): Promise<Character> {
    return this.characterRepository.findOne(id);
  }

  async getByName(name: string): Promise<Character> {
    const chars = await this.characterRepository.find({ name });
    return chars.length ? chars[0] : new Character();
  }

  findAll(): Promise<Character[]> {
    return this.characterRepository.find();
  }

  create(data: Character): Promise<Character> {

    const char = this.characterRepository.create();
    char.name = data.name;
    char.description = data.description;
    return this.characterRepository.save(char);
  }
}
