const dayThree = require("./dayThree");
const load = require("./data");

test("Day Three Part One Example", () => {
  const input = load("dayThreeExample.txt");
  expect(dayThree.partOne(input)).toBe(8);
});

test("Day Three Part One", () => {
  const input = load("dayThree.txt");
  expect(dayThree.partOne(input)).toBe(2439);
});

test("Day Three Part Two Example", () => {
  const input = load("dayThreeExample.txt");
  expect(dayThree.partTwo(input)).toBe(2286);
});

test("Day Three Part Two", () => {
  const input = load("dayThree.txt");
  expect(dayThree.partTwo(input)).toBe(63711);
});
