import { Person } from "@/model/Person";

export class Student extends Person {
  readonly school: string;

  constructor(
    firstName: string,
    lastName: string,
    ssn: string,
    school: string
  ) {
    super(firstName, lastName, ssn);
    this.school = school;
  }
}

export const studentSelector =
  (country: string, school: string) =>
  (student: Student): boolean => {
    return student.address?.country === country && student.school === school;
  };

export const findStudentsBy = (
  frineds: Student[],
  selector: (student: Student) => boolean
): Student[] => {
  return frineds.filter(selector);
};
