const part_one = require("./dayOne");
const load = require("./data");

test("adds 1 + 2 to equal 3", () => {
  const input = load("dayOnePartOne.txt");
  expect(part_one(input)).toBe(142);
});
