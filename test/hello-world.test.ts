test('adds 1 + 2 to equal 3', () => {
  const result: number = 1 + 2;
  expect(result).toBe(3);
});

const price = (goods: string) => 0;

describe('when there are no items', () => {
  const result = price("");
  it('the price is 0', () => {
    expect(result).toBe(0);
  });
})
