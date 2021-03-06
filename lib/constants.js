const path = require("path");
/**
 * only change this file if you want to add more template files
 */
exports.templates = {
  ci: {
    travis: path.join(__dirname) + "\\templates\\.travis.yml",
    hound: path.join(__dirname) + "\\templates\\.hound.yml",
  },
  docker: {
    dockerignore: path.join(__dirname) + "\\templates\\.dockerignore",
    dockerfile: path.join(__dirname) + "\\templates\\Dockerfile",
  },
  docker_compose: {
    postgresql: path.join(__dirname) + "\\templates\\postgres\\docker-compose.yml",
    mongodb: path.join(__dirname) + "\\templates\\mongodb\\docker-compose.yml",
  },
  lint: {
    eslintrc: path.join(__dirname) + "\\templates\\.eslintrc",
    eslintignore: path.join(__dirname) + "\\templates\\.eslintignore",
  },
  babel: {
    babelrc: path.join(__dirname) + "\\templates\\.babelrc",
  },
  database: {
    sequelizerc: path.join(__dirname) + "\\templates\\.sequelizerc",
    procfile: path.join(__dirname) + "\\templates\\Procfile",
  },
  deployment: {
    now: path.join(__dirname) + "\\templates\\now.json",
    netlify_react: path.join(__dirname) + "\\templates\\netlify\\react\\netlify.toml",
    netlify_vue: path.join(__dirname) + "\\templates\\netlify\\vue\\netlify.toml",
  },
  config: {
    tsconfig: path.join(__dirname) + "\\templates\\tsconfig.json",
  },
  documentation: {
    readme: path.join(__dirname) + "\\templates\\README.md",
  },
};

exports.questions = [
  {
    type: "checkbox",
    message: "CI\\CD",
    name: "ci",
    choices: ["travis", "hound"],
  },
  {
    type: "checkbox",
    message: "Dockerize",
    name: "docker",
    choices: ["dockerfile", "dockerignore"],
  },
    {
    type: "checkbox",
    message: "Docker Compose",
    name: "docker_compose",
    choices: ["postgresql", "mongodb"],
  },
  {
    type: "checkbox",
    message: "Linter",
    name: "lint",
    choices: ["eslintrc", "eslintignore"],
  },
  {
    type: "checkbox",
    message: "Database",
    name: "database",
    choices: ["sequelizerc", "procfile"],
  },
  {
    type: "checkbox",
    message: "Deployment",
    name: "deployment",
    choices: ["now","netlify_react","netlify_vue"],
  },
  {
    type: "checkbox",
    message: "Babel",
    name: "babel",
    choices: ["babelrc"],
  },
  {
    type: "checkbox",
    message: "Ts configuration",
    name: "config",
    choices: ["tsconfig"],
  },
  {
    type: "checkbox",
    message: "Documentation",
    name: "documentation",
    choices: ["readme"],
  },
];
