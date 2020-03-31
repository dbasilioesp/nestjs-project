import {
  Entity,
  Column,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn
} from "typeorm";

@Entity()
export class Character {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ length: 50 })
  name: string;

  @Column("text")
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: number;
}
