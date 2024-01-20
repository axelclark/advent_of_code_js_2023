function partOne(input) {
  const total_sum = input.map(parseCode).reduce((acc, value) => acc + value, 0);
  return total_sum;
}

const parseCode = (line) => {
  const digits = line.replace(/[a-z]/g, "");
  const first = digits.charAt(0);
  const last = digits.charAt(digits.length - 1);
  const value = `${first}${last}`;
  return Number.parseInt(value);
};

const replacements = [
  ["one", "one1one"],
  ["two", "two2two"],
  ["three", "three3three"],
  ["four", "four4four"],
  ["five", "five5five"],
  ["six", "six6six"],
  ["seven", "seven7seven"],
  ["eight", "eight8eight"],
  ["nine", "nine9nine"],
];

const replaceTextWithNumber = (line) => {
  const updatedText = replacements.reduce((acc, [pattern, replacement]) => {
    const regexPattern = new RegExp(pattern, "g");
    return acc.replace(regexPattern, replacement);
  }, line);

  return updatedText;
};

function partTwo(input) {
  const total_sum = input
    .map(replaceTextWithNumber)
    .map(parseCode)
    .reduce((acc, value) => acc + value, 0);
  return total_sum;
}

exports.partOne = partOne;
exports.partTwo = partTwo;
