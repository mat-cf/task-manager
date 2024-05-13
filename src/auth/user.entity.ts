import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { UsersRepository } from "./users.repository";

@Entity({ repository: () => UsersRepository })
export class User {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property()
  @Unique()
  username: string;
  
  @Property()
  password: string;
}