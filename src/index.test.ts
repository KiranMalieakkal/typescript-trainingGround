import 'mocha';
import assert from 'assert';
import { greet, isOld, countOdd, sumEven, Person, Address, getPersonStreetNo, PersonClass, EmployeeClass, IPerson, getPersonNameString } from './index';

describe('ts tests', () => {
  it('get greeting', () => {
    // arrange
    const birthYear = 1972;
    const name = 'Marcus';

    // act
    const result = greet(name, birthYear);

    // assert
    assert.strictEqual(result, 'Hello Marcus, you are 52 years old');
  });
  it('returns true if age is above or equal to 35', () => {
    // act
    const is34Old = isOld(34);
    const is35Old = isOld(35);
    const is36Old = isOld(36);
    // assert
    assert.strictEqual(is34Old, false);
    assert.strictEqual(is35Old, true);
    assert.strictEqual(is36Old, true);
  });
  it("count odd numbers", () => {
    // arrange
    const firstFive = [1, 2, 3, 4, 5];
  
    // act
    const numberOfOdds = countOdd(firstFive);
  
    // arrange
    assert.strictEqual(numberOfOdds, 3);
  });
  it("sum even numbers", () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    // act
    const sum = sumEven(nums);
  
    // arrange
    assert.strictEqual(sum, 30);
  });
  it("gets the street number for a person", () => {
    // arrange
    const p: Person = {
      name: "Marcus",
      birthYear: 1972,
      address: {
        street: "Strålgatan",
        streetNo: 23,
        city: "Stockholm",
      },
    };
    const streetNo = getPersonStreetNo(p);

    // assert
    assert.strictEqual(streetNo, 23);
  });
  it("using classes", () => {
    // arrange
    const p = new PersonClass("Marcus", 1972);
    const e = new EmployeeClass("Marcus Employee", 1972);
  
    // act
    e.employeeId = 12345;
  
    // assert
    //assert.strictEqual(p.name, "Marcus"); // breaks with Property 'name' is private and only accessible within class 'PersonClass'
    assert.strictEqual(p.getName(), "Marcus");
    assert.strictEqual(e.getName(), "Marcus Employee");
    assert.strictEqual(e.employeeId, 12345);
  });
  it("prints an IPerson", () => {
    // arrange
    const p1: IPerson = { name: "Marcus", birthYear: 1972 };
    const p2 = { name: "David", birthYear: 1975, drummer: true };
  
    // act
    const p1Address = getPersonNameString(p1);
    const p2Address = getPersonNameString(p2);
  
    // assert
    assert.strictEqual(p1Address, "Marcus, 1972");
    assert.strictEqual(p2Address, "David, 1975");
  });
});
