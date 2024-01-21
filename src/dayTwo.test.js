const dayTwo = require("./dayTwo");
const load = require("./data");

test("Day Two Part One Example", () => {
  const input = load("dayTwoExample.txt");
  expect(dayTwo.partOne(input)).toBe(8);
});

test("Day Two Part One", () => {
  const input = load("dayTwo.txt");
  expect(dayTwo.partOne(input)).toBe(2439);
});

test("Day Two Part Two Example", () => {
  const input = load("dayTwoExample.txt");
  expect(dayTwo.partTwo(input)).toBe(2286);
});

test("Day Two Part Two", () => {
  const input = load("dayTwo.txt");
  expect(dayTwo.partTwo(input)).toBe(63711);
});
