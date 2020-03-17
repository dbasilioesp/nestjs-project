import {
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  Entity
} from "typeorm";

Entity();
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  // @OneToMany(
  //   type => Post,
  //   post => post.author
  // )
  // posts: Post[];
}

Entity();
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column()
  votes: number;

  @ManyToOne(type => Author)
  author: Author;
}
