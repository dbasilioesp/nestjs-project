import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.userRepository.find({ username });
    return users.length ? users[0] : null;
  }

  async create(userInput): Promise<User> {
    const user = this.userRepository.create();
    user.firstName = userInput.firstName;
    user.lastName = userInput.lastName;
    user.username = userInput.username;
    user.email = userInput.email;
    user.password = await this._generatePassword(userInput.password);
    return this.userRepository.save(user);
  }

  async update(id, userInput): Promise<User> {
    const user = await this.userRepository.findOne(id);
    user.firstName = userInput.firstName;
    user.lastName = userInput.lastName;
    user.username = userInput.username;
    user.email = userInput.email;
    return this.userRepository.save(user);
  }

  _generatePassword(password): Promise<any> {
    return bcrypt.hash(password, 10);
  }
}
