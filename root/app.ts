#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import welcome from "./welcome.js";
let msg = `
    *************************************
    **** Welcome to MT-WORD-COUNTER ****
    *************************************
`;
await welcome(msg);
let restart = true;
do {
  const answers: { sentence: string } = await inquirer.prompt([
    {
      type: "input",
      name: "sentence",
      message: "Enter anything you want:",
    },
  ]);
  const words = answers.sentence.trim().split(" ");
  console.log(`Your have wrote ${words.length} words`);
  const askFromUser: { askuser: boolean } = await inquirer.prompt({
    name: "askuser",
    type: "confirm",
    message: "Do you want to continue?",
    default: false,
  });
  const userReply = askFromUser.askuser;
  restart = userReply;
} while (restart);
