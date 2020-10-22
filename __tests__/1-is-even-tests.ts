import { expect } from 'chai';

function isEven(number: number) {
  return number % 2 === 0;
}

describe.skip('Is even tests', () => {
  it('returns false for odd number', () => {
    const result = isEven(3);
    expect(result).to.equal(false);
  });

  const evenNumbers = [2, 4, 6, 7, 10, 12, 12, 16, 248, 10308, 124882, 278];

  evenNumbers.forEach((evenNumber) => {
    it(`${evenNumber} is even`, () => {
      expect(isEven(evenNumber)).to.equal(true);
    });
  });
});
