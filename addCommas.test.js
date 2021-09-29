const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('it returns string for positive numbers', () => {
    expect(addCommas(123)).toBe("123");
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1234567)).toBe("1,234,567");
  })

  test('it returns string for negative numbers', () => {
    expect(addCommas(-123)).toBe("-123");
    expect(addCommas(-1234)).toBe("-1,234");
    expect(addCommas(-1234567)).toBe("-1,234,567");
  })
});
