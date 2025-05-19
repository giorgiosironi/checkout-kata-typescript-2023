import { price } from "../src/price";

describe('when there are no items', () => {
  const result = price("");
  it('the price is 0', () => {
    expect(result).toBe(0);
  });
})
