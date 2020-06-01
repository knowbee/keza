const cli = require("commander");

const keza = new cli.Command();
exports.helper = () => {
  keza
    .description("generate template files very fast")
    .version("1.1.2")
    .parse(process.argv);
  keza.on("--help", function () {
    console.log("Examples:");
    console.log("  $ keza --help");
    console.log("  $ keza -g");
  });
};
