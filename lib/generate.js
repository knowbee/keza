const fs = require("fs")
const bar = require("cli-progress");
const chalk = require("chalk");
const progress = new bar.SingleBar({
  format: "Done |" + chalk.magenta("{bar}") + "| {percentage}%",
  barCompleteChar: "\u2588",
  hideCursor: true,
});
exports.generateTemplate = (from, to) => {
  progress.start(to.length);
  try {
    fs.copyFileSync(from, to);
    progress.update(100);
    progress.stop();
  } catch (error) {
    console.log("\n");
    console.log(chalk.yellow("oooh no! try again"));
    process.exit(1)
  }
}
