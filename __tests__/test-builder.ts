import { expect } from "chai";

describe("Test builder example", () => {
  const evenNumbers = [2, 4, 6, 8, 10, 12, 12, 16, 248, 10308, 124882, 278];

  evenNumbers.forEach((evenNumber) => {
    it(`${evenNumber} is even`, () => {
      expect(evenNumber % 2).to.equal(0);
    });
  });
});
