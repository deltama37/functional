import { Address } from "./Address";

export class Person {
  readonly firstName: string;
  readonly lastName: string;
  readonly ssn: string;
  address: Address | null;
  birthYear: number | null;

  constructor(firstName: string, lastName: string, ssn: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ssn = ssn;
    this.address = null;
    this.birthYear = null;
  }

  toString = (): string => {
    return `Person (${this.firstName}, ${this.lastName}) `;
  };
}
