import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveProperty
} from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

interface createUserInput {
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  password: String;
}

interface updateUserInput {
  id: String;
  firstName: String;
  lastName: String;
  username: String;
  email: String;
}

@Resolver("User")
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation()
  async createUser(@Args("user") userInput: createUserInput) {
    return this.userService.create(userInput);
  }

  @Mutation()
  async updateUser(@Args("user") userInput: updateUserInput) {
    return this.userService.update(userInput.id, userInput);
  }
}
