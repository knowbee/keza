#!/usr/bin/env node

const fs = require("fs");
const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const bar = require("cli-progress");
const cli = require("commander");

clear();
const keza = new cli.Command();
console.log(chalk.green(figlet.textSync("Keza", { horizontalLayout: "full" })));
const progress = new bar.SingleBar({
  format: "Done |" + chalk.magenta("{bar}") + "| {percentage}%",
  barCompleteChar: "\u2588",
  hideCursor: true
});

if (fs.existsSync("package.json")) {
  helper();
  keza.parse(process.argv);
  process.argv.slice(2).forEach(function(item) {
    if (item === "-b" || item === "--babel") {
      generate(__dirname + "/templates/" + ".babelrc", ".babelrc");
    } else if (item === "-d" || item === "--docker") {
      generate(__dirname + "/templates/" + ".dockerignore", ".dockerignore");
      generate(__dirname + "/templates/" + "Dockerfile", "Dockerfile");
    } else if (item === "-e" || item === "--eslint") {
      generate(__dirname + "/templates/" + ".eslintrc", ".eslintrc");
      generate(__dirname + "/templates/" + ".eslintignore", ".eslintignore");
    } else if (item === "-g" || item === "--gitignore") {
      generate(__dirname + "/templates/" + ".gitignore", ".gitignore");
    } else if (item === "-ho" || item === "--hound") {
      generate(__dirname + "/templates/" + ".hound.yml", ".hound.yml");
    } else if (item === "-r" || item === "--readme") {
      generate(__dirname + "/templates/" + "README.md", "README.md");
    } else if (item === "-s" || item === "--sequelizerc") {
      generate(__dirname + "/templates/" + ".sequelizerc", ".sequelizerc");
    } else if (item === "-t" || item === "--travis") {
      generate(__dirname + "/templates/" + ".travis.yml", ".travis.yml");
    }
  });
  if (process.argv.length == 2) {
    fs.readdir(__dirname + "/templates", function(err, filenames) {
      if (err) {
        return;
      }
      progress.start(filenames.length);
      filenames.forEach(file => {
        generate(__dirname + "/templates/" + file, file);
        progress.update(filenames.length);
      });
      progress.stop();
    });
  }
  function generate(from, to) {
    progress.start(to.length);
    fs.copyFile(from, to, err => {
      progress.update(100);
      if (err) throw err;
      progress.stop();
    });
  }
} else {
  helper();
  keza.parse(process.argv);
  console.log(
    chalk.magenta("You have to initialize your project with npm or yarn first")
  );

  process.exit();
}
function helper() {
  keza
    .version("0.0.2")
    .option("-b, --babel", "generate babelrc")
    .option("-d, --docker", "generate docker file")
    .option("-e, --eslint", "generate eslintrc and eslintignore")
    .option("-g, --gitignore", "generate nodejs gitignore")
    .option("-ho, --hound", "generate hound file")
    .option("-r, --readme", "generate readme file")
    .option("-s, --sequelize", "generate sequerizerc")
    .option("-t, --travis", "generate travis");
  keza.on("--help", function() {
    console.log("Examples:");
    console.log("  $ keza --help");
    console.log("  $ keza -h");
    console.log("  $ keza -b -d -t");
  });
}
