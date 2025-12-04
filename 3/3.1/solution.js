import fs from "node:fs";

try {
    const data = fs.readFileSync("../input.txt", "utf8").toString().split("\n");
    let output = 0;

    for (let line of data) {
        let nums = line.split("");
        if (!/[0-9]/.test(nums.at(-1))) {
            nums.pop();
        }
        let firstDigit = "0";
        let idx = 0;
        for (let i = 0; i < (nums.length - 1); i++) {
            let compare = nums[i];
            if (compare > firstDigit) {
                firstDigit = compare;
                idx = i;
            }
        }

        let secondDigit = "0";
        for (let k = idx + 1; k < nums.length; k++) {
            let comp = nums[k];
            if (comp > secondDigit) {
                secondDigit = comp;
            }
        }

        let result = parseInt(firstDigit + secondDigit)
        output += result;
    }

    console.log(output)

} catch (err) {
    console.log(err);
}