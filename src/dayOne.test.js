const dayOne = require("./dayOne");
const load = require("./data");

test("Day One Part One Example", () => {
  const input = load("dayOnePartOneExample.txt");
  expect(dayOne.partOne(input)).toBe(142);
});

test("Day One Part One", () => {
  const input = load("dayOne.txt");
  expect(dayOne.partOne(input)).toBe(54597);
});

test("Day One Part Two Example", () => {
  const input = load("dayOnePartTwoExample.txt");
  expect(dayOne.partTwo(input)).toBe(281);
});

test("Day One Part Two", () => {
  const input = load("dayOne.txt");
  expect(dayOne.partTwo(input)).toBe(54504);
});
