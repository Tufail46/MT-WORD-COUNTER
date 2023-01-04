import inquirer from "inquirer";
let restart = true;
do {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: "Enter anything you want:",
        },
    ]);
    const words = answers.sentence.trim().split(" ");
    console.log(`Your have wrote ${words.length} words`);
    const askFromUser = await inquirer.prompt({
        name: "askuser",
        type: "confirm",
        message: "Do you want to continue?",
        default: false,
    });
    const userReply = askFromUser.askuser;
    restart = userReply;
} while (restart);
