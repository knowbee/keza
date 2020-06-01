const fs = require("fs")
const chalk = require("chalk");
exports.generateTemplate = (from, to) => {
  try {
    fs.copyFileSync(from, to);

  } catch (error) {
    console.log("\n");
    console.log(chalk.yellow("oooh no! try again"));
    process.exit(1)
  }
}
