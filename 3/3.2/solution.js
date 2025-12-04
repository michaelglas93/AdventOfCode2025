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
        for (let i = 0; i <= nums.length - 12; i++) {
            let compare = nums[i];
            if (compare > firstDigit) {
                firstDigit = compare;
                idx = i;
            }
        }

        let secondDigit = "0";
        let idx2 = 0;
        for (let k = idx + 1; k <= nums.length - 11; k++) {
            let comp = nums[k];
            if (comp > secondDigit) {
                secondDigit = comp;
                idx2 = k
            }
        }

        let thirdDigit = "0";
        let idx3 = 0;
        for (let l = idx2 + 1; l <= nums.length - 10; l++) {
            let comp = nums[l];
            if (comp > thirdDigit) {
                thirdDigit = comp;
                idx3 = l
            }
        }

        let fourDigit = "0";
        let idx4 = 0;
        for (let m = idx3 + 1; m <= nums.length - 9; m++) {
            let comp = nums[m];
            if (comp > fourDigit) {
                fourDigit = comp;
                idx4 = m
            }
        }

        let fiveDigit = "0";
        let idx5 = 0;
        for (let n = idx4 + 1; n <= nums.length - 8; n++) {
            let comp = nums[n];
            if (comp > fiveDigit) {
                fiveDigit = comp;
                idx5 = n
            }
        }

        let sixDigit = "0";
        let idx6 = 0;
        for (let o = idx5 + 1; o <= nums.length - 7; o++) {
            let comp = nums[o];
            if (comp > sixDigit) {
                sixDigit = comp;
                idx6 = o
            }
        }

        let sevenDigit = "0";
        let idx7 = 0;
        for (let p = idx6 + 1; p <= nums.length - 6; p++) {
            let comp = nums[p];
            if (comp > sevenDigit) {
                sevenDigit = comp;
                idx7 = p
            }
        }

        let eightDigit = "0";
        let idx8 = 0;
        for (let q = idx7 + 1; q <= nums.length - 5; q++) {
            let comp = nums[q];
            if (comp > eightDigit) {
                eightDigit = comp;
                idx8 = q
            }
        }

        let nineDigit = "0";
        let idx9 = 0;
        for (let r = idx8 + 1; r <= nums.length - 4; r++) {
            let comp = nums[r];
            if (comp > nineDigit) {
                nineDigit = comp;
                idx9 = r
            }
        }

        let tenDigit = "0";
        let idx10 = 0;
        for (let s = idx9 + 1; s <= nums.length - 3; s++) {
            let comp = nums[s];
            if (comp > tenDigit) {
                tenDigit = comp;
                idx10 = s
            }
        }

        let elevenDigit = "0";
        let idx11 = 0;
        for (let t = idx10 + 1; t <= nums.length - 2; t++) {
            let comp = nums[t];
            if (comp > elevenDigit) {
                elevenDigit = comp;
                idx11 = t
            }
        }

        let twelveDigit = "0";
        let idx12 = 0;
        for (let u = idx11 + 1; u <= nums.length - 1; u++) {
            let comp = nums[u];
            if (comp > twelveDigit) {
                twelveDigit = comp;
                idx12 = u
            }
        }

        let result = parseInt(
            firstDigit + secondDigit + thirdDigit + fourDigit + fiveDigit +
            sixDigit + sevenDigit + eightDigit + nineDigit + tenDigit +
            elevenDigit + twelveDigit
        );
        output += result;
    }

    console.log(output)

} catch (err) {
    console.log(err);
}
