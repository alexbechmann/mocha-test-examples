import { expect } from 'chai';

function isEven(number: number) {
  return number % 2 === 0;
}

describe.skip('Is even tests', () => {
  it('returns a boolean', () => {
    const result = isEven(3);
    expect(typeof result).to.equal('boolean');
  });

  const evenNumbers = [2, 4, 6, 8, 10, 12, 12, 16, 248, 10308, 124882, 278];

  evenNumbers.forEach((evenNumber) => {
    it(`${evenNumber} is even`, () => {
      expect(isEven(evenNumber)).to.equal(true);
    });
  });
});
