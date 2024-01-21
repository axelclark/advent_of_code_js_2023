const partOne = (input) => {
  const games = input.map(parseLine);
  const possibleGames = games.filter(isPossible);
  return possibleGames.reduce((acc, { game }) => acc + game, 0);
};

const parseLine = (line) => {
  const [rawGame, rawResults] = line.replace("Game ", "").split(":");
  const game = Number.parseInt(rawGame);
  const parsedResults = rawResults.split(";").map(parseHandfull);
  const maxResults = new Map();
  const results = parsedResults.reduce((acc, handfull) => {
    for (const [color, value] of handfull) {
      if (acc.has(color)) {
        acc.set(color, Math.max(acc.get(color), value));
      } else {
        acc.set(color, value);
      }
    }
    return acc;
  }, maxResults);
  return { game, results };
};

const parseHandfull = (handfull) => {
  const trimmedHandfull = handfull.trim();
  const results = trimmedHandfull.split(",").map(parseCubeResult);
  return new Map(results);
};

const parseCubeResult = (cubeResult) => {
  const trimmedCubeResult = cubeResult.trim();
  const [number, color] = trimmedCubeResult.split(" ").map((x) => x.trim());
  return [color, Number.parseInt(number)];
};

const constraints = new Map([
  ["red", 12],
  ["green", 13],
  ["blue", 14],
]);

const isPossible = ({ results }) => {
  const gameIsPossible = Array.from(results).every(([color, value]) => {
    const maxValue = constraints.get(color);
    const isPossibleForColor = maxValue >= value;
    return isPossibleForColor;
  });
  return gameIsPossible;
};

const partTwo = (input) => {
  result = input.map(parseLine);
  return input;
};

exports.partOne = partOne;
exports.partTwo = partTwo;
