# Keza

[![Build Status](https://travis-ci.org/knowbee/keza.svg?branch=master)](https://travis-ci.org/knowbee/keza)
[![npm](https://img.shields.io/npm/dt/keza.svg)](https://www.npmjs.com/package/keza)
[![Dependency Status](https://david-dm.org/knowbee/keza.svg)](https://david-dm.org/knowbee/keza)
[![npm](https://img.shields.io/npm/v/keza.svg)](https://www.npmjs.com/package/keza)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

Generate nodejs CI template files, Eslint config files, gitignore, docker and readme file from the command line when keza's CLI is installed globally

## Install

```cli
npm install -g keza
```

or

```cli
yarn global add keza
```

## Using Keza CLI

#### Command Line

```cli
$ keza <options>
```

## Options:

- `-h` or `--help`: display helper screen.
- `-b` or `--babel`: generate .babelrc.
- `-d` or `--docker`: generate docker file.
- `-e` or `--eslint`: generate .eslintrc and .eslintignore file.
- `-g` or `--gitignore`: generate nodejs .gitignore.
- `-ho` or `--hound`: generate hound yml file.
- `-r` or `--readme`: generate readme file.
- `-s` or `--sequelize`: generate .sequerizerc.
- `-t` or `--travis`: generate travis yml file.

## Contribution

- Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

## License

MIT

## Author

Igwaneza Bruce
