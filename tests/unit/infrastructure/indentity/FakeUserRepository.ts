import {UserRepository} from "../../../../src/domain/identity/UserRepository";
import {User} from "../../../../src/domain/identity/User";

export default class FakeUserRepository implements UserRepository {
  private readonly users: User[] = [
    new User('test@email.com'),
    new User('test2@email.com')
  ];

  Create(user: User): void {
    this.users.push(user);
  }

  Find(email: string): User {
    return this.users.find(u => u.GetEmail().localeCompare(email, [], { sensitivity: 'accent'}) === 0);
  }
}
