#! usr/bin/env node
import inquerir from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.red("This Is A word Counter"));
const answ = await inquerir.prompt([{
        name: "sentence",
        type: "input",
        message: (chalk.blue("Enter your sentence to count the word:"))
    }]);
const words = answ.sentence.trim().split(" ");
console.log(words);
console.log(chalk.red(`Your sentence word count is ${words.length}`));
