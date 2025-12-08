import fs from "node:fs";

try {
  const data = fs.readFileSync("../input.txt", "utf8").toString().split("\n");

  console.log(data);

  const paperRolls = new Set();
  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      if (data[row][col] === "@") {
        paperRolls.add(`${row},${col}`);
      }
    }
  }

  let result = 0;
  for (const pos of paperRolls) {
    const [row, col] = pos.split(",").map(Number);
    if (countNeighbors(row, col, paperRolls) < 4) {
      result++;
    }
  }

  console.log(result)
} catch (err) {
  console.log(err);
}

function countNeighbors(row, col, paperRolls) {
  let count = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const neighborKey = `${row + dr},${col + dc}`;
      if (paperRolls.has(neighborKey)) {
        count++;
      }
    }
  }
  return count;
}
