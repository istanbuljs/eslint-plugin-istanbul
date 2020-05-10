# eslint-plugin-istanbul
[![npm version](https://badge.fury.io/js/eslint-plugin-istanbul.svg)](https://badge.fury.io/js/eslint-plugin-istanbul)
[![CI](https://github.com/istanbuljs/eslint-plugin-istanbul/workflows/CI/badge.svg)](https://github.com/istanbuljs/eslint-plugin-istanbul/actions)

A set of rules to enforce good practices for istanbuljs.

## Install

```console
$ npm install --save-dev eslint eslint-plugin-istanbul
```

## Usage

Configure it in `package.json`.

```json
{
    "name": "my-awesome-project",
    "eslintConfig": {
        "plugins": [
            "istanbul"
        ],
        "rules": {
            "istanbul/no-ignore-file": "error",
            "istanbul/prefer-ignore-reason": "error"
        }
    }
}
```

## Rules

- [no-ignore-file](docs/rules/no-ignore-file.md) - Bans istanbul ignore file comment.
- [prefer-ignore-reason](docs/rules/prefer-ignore-reason.md) - Enforce specifing a reason to ignore comments.

See the [ESLint docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending config files.
