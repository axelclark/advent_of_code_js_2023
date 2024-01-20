const fs = require("fs");
const path = require("path");

function load(file, trim = true) {
  const filePath = path.join(__dirname, "..", "data", file);
  let fileContent = fs.readFileSync(filePath, "utf8");

  if (trim) {
    fileContent = fileContent.split("\n").filter((x) => x !== "");
  } else {
    fileContent = fileContent.split("\n");
  }

  return fileContent;
}

module.exports = load;
