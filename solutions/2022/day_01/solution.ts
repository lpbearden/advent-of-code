import * as fs from 'fs';
const file = fs.readFileSync(__dirname + '/input.txt', 'utf8');

const elves: string[] = file.split("\n\n");
const calories: number[] = [];
elves.forEach(elf => {
    let elfSum = 0;
    elf.split("\n").forEach(answer => { elfSum += Number(answer); });
    calories.push(elfSum);
});
console.log(Math.max(...calories));

calories.sort((a, b) => a - b);
console.log(calories.splice(-3).reduce((a, b) => a + b, 0));