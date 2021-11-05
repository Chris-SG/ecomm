import {UserRepository} from "./UserRepository";
import {User} from "./User";

export class RegisterIdentityUseCase {

    private readonly _emails: string[];

    constructor(
      private readonly _userRepository: UserRepository
    ) {
        this._emails = [];
    }

    Register(emailAddress: string): boolean {
        const user = this._userRepository.Find(emailAddress);
        if (user) return false;
        this._userRepository.Create(new User(emailAddress));
        return true;
    }
}