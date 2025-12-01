import fs from "node:fs";

try {
  const data = fs.readFileSync("../input.txt", "utf8").toString().trim().split("\n");
  console.log(data);

  let curr = 50;
  let zeroCounter = 0;

  for (let line of data) {
    let dir = line[0];
    let value = parseInt(line.slice(1));
    for (let i = 0; i < value; i++) {
      if (dir === "R") {
        curr = (curr + 1) % 100;
      } else {
        curr = (curr - 1 + 100) % 100;
      }

      if (curr === 0) zeroCounter++;
    }
  }

  console.log(zeroCounter);
} catch (err) {
  console.error(err);
}
