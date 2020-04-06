#!/usr/bin/env node
const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");
const { templates, questions } = require("./lib/constants");
const { helper } = require("./lib/help");
const { generateTemplate } = require("./lib/generate");
const path = require("path");
const bar = require("cli-progress");
const progress = new bar.SingleBar({
  format: "Done |" + chalk.magenta("{bar}") + "| {percentage}%",
  barCompleteChar: "\u2588",
  hideCursor: true,
});
clear();
helper();
console.log(
  chalk.magenta(figlet.textSync("Keza", { horizontalLayout: "full" }))
);
console.log(chalk.green("generate template files very fast"));
if (process.argv.length == 2) {
  inquirer.prompt(questions).then((answers) => {
    let choices = [];
    Object.keys(answers).forEach((a) => {
      Object.keys(templates).forEach((t) => {
        if (a === t && answers[a].length >= 1) {
          answers[a].map((file) => {
            choices = [...choices, templates[a][file]];
          });
        }
      });
    });
    progress.start(choices.length);
    choices.forEach((choice) => {
      generateTemplate(choice, path.basename(choice));
    });
    progress.update(100);
    progress.stop();
  });
}
