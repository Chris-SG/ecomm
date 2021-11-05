import { expect } from 'chai'
import { describe, it } from 'mocha';

import { RegisterIdentityUseCase } from '../../../../src/domain/identity/register';
import FakeUserRepository from "../../infrastructure/indentity/FakeUserRepository";

describe("register", () => {
    const userRepository = new FakeUserRepository();
    const registerIdentityUseCase = new RegisterIdentityUseCase(userRepository);

    it("When a user is registered with an email address, and the user does not exist, return success", () => {
        const expectedRegisterIdentityResult = true;

        const registerIdentityResult = registerIdentityUseCase.Register("unique@email.com");

        expect(registerIdentityResult).to.equal(expectedRegisterIdentityResult);
    });

    it("When a user is registered with an email address, and the user already exists, return failure", () => {
        const expectedRegisterIdentityResult = false;

        const registerIdentityResult = registerIdentityUseCase.Register("test@email.com");

        expect(registerIdentityResult).to.equal(expectedRegisterIdentityResult);
    });
});
