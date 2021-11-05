
export class User {
  constructor(
    private readonly email: string
  ) {
  }

  public GetEmail(): string {
    return this.email;
  }
}
