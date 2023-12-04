const fs = require("fs");

const lines = fs
    .readFileSync("input.txt", { encoding: 'utf-8' })
    .replace(/\r/g, "")
    .split("\n");


function part1() {

    let sum = 0;
    for (const line of lines) {
        console.log(line);
        let first = line.match(/\d/);
        let last = line.match(/\d(?=\D*$)/);
        sum += Number(first + last);
    }
    console.log(sum);
}


part1();