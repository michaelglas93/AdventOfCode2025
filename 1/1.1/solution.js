import fs from "node:fs";

try {
  const data = fs.readFileSync("../input.txt", "utf8").toString().split("\n");
  console.log(data);

  let curr = 50;
  let zeroCounter = 0;

  for (let i = 0; i < data.length; i++) {
    let res = 0;
    let value = parseInt(data[i].substring(1));
    if (data[i].startsWith("R")) {
      res = curr + value;
      if (res % 100 === 0) {
        zeroCounter++;
      }
      curr += value;
    }

    if (data[i].startsWith("L")) {
      res = curr - value;
      if (res % 100 === 0) {
        zeroCounter++;
      }
      curr -= value;
    }
  }

  console.log(zeroCounter);
} catch (err) {
  console.error(err);
}
