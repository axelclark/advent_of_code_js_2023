const partOne = function partOne(input) {
  const games = input.map(parseLine);
  const possibleGames = games.filter(isPossible);
  return possibleGames.reduce((acc, { game }) => acc + game, 0);
};

const setMaxResults = function setMaxResults(maxResults, handfull) {
  [...handfull].forEach(([color, value]) => {
    if (maxResults.has(color)) {
      maxResults.set(color, Math.max(maxResults.get(color), value));
    } else {
      maxResults.set(color, value);
    }
  });

  return maxResults;
};

const parseLine = function parseLine(line) {
  const [rawGame, rawResults] = line.replace("Game ", "").split(":");
  const game = Number.parseInt(rawGame);
  const parsedResults = rawResults.split(";").map(parseHandfull);
  const results = parsedResults.reduce(setMaxResults, new Map());
  return { game, results };
};

const parseHandfull = function parseHandfull(handfull) {
  const trimmedHandfull = handfull.trim();
  const results = trimmedHandfull.split(",").map(parseCubeResult);
  return new Map(results);
};

const parseCubeResult = function parseCubeResult(cubeResult) {
  const trimmedCubeResult = cubeResult.trim();
  const [number, color] = trimmedCubeResult.split(" ").map((x) => x.trim());
  return [color, Number.parseInt(number)];
};

const constraints = new Map([
  ["red", 12],
  ["green", 13],
  ["blue", 14],
]);

const isPossible = function isPossible({ results }) {
  const gameIsPossible = Array.from(results).every(([color, value]) => {
    const maxValue = constraints.get(color);
    const isPossibleForColor = maxValue >= value;
    return isPossibleForColor;
  });
  return gameIsPossible;
};

const calculatePower = function calculatePower({ results }) {
  const cubeValues = results.values();
  const power = [...cubeValues].reduce((acc, value) => {
    return acc * value;
  }, 1);

  return power;
};

const partTwo = function partTwo(input) {
  const result = input
    .map(parseLine)
    .map(calculatePower)
    .reduce((acc, power) => acc + power, 0);
  return result;
};

exports.partOne = partOne;
exports.partTwo = partTwo;
