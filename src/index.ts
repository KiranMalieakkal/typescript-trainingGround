import { Interface } from "readline";

function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}
function isOld(birthYear: number) {
  if (birthYear >= 35) return true;
  return false;
}
function countOdd(arr: number[]): number {
  return arr.filter((num)=>{ return num%2 !== 0}).length;
}
function sumEven(arr: number[]): number {
  return arr.filter((num) => num % 2 === 0)
            .reduce((sum, curr) => sum + curr, 0);
}

type Address = {
  street: string;
  streetNo: number;
  city: string;
};

type Person = {
  name: string;
  birthYear: number;
  address: Address;
};
function getPersonStreetNo(p: Person): number{
  return p.address.streetNo;
}

class PersonClass {
  private name: string = "";

  birthYear: number = 1970;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getName() {
    return this.name;
  }
}

class EmployeeClass extends PersonClass {
  employeeId: number = -1;
}

interface IPerson{
  name: string;
  birthYear: number;
}

function getPersonNameString(p: IPerson): string{
  return `${p.name}, ${p.birthYear}`;
}

console.log("eda mwone")
export { greet, isOld, countOdd, sumEven, Person, Address, getPersonStreetNo, PersonClass, EmployeeClass, IPerson, getPersonNameString };
