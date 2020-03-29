import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './character.entity';
import { CharacterResolver } from './CharacterResolver';

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  providers: [CharactersService, CharacterResolver]
})
export class CharactersModule { }
