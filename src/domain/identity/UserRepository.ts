import {User} from "./User";

export interface UserRepository {
  Create(user: User): void;
  Find(email: string): User | undefined;
}
