# eslint-config-vast
> ESLint shareable config for Vast's JavaScript coding standards

[![NPM version](https://badge.fury.io/js/eslint-config-vast.svg)](https://www.npmjs.org/package/eslint-config-vast)

## Installation

    npm install eslint-config-vast --save-dev

## Usage

Create a file named `.eslintrc` in the root of your project:

```javascript
{
  "extends": "eslint-config-vast",
  "rules": {
    // Your overrides...
  }
}
```

### Setting up ESLint

If you haven’t already set up ESLint on your project, run:

    npm install eslint --save-dev

Add "eslint" to "scripts" in `package.json`:

```json
"scripts": {
    "eslint": "eslint '*.js' 'js/**/*.js' --ignore-pattern 'js/vendor/**/*.js'"
}
```

...and then you can run:

    npm run eslint

To add a Git pre-commit hook for ESLint, run:

    npm install pre-commit --save-dev

...and add this to `package.json`:

```json
"pre-commit": [
  "eslint"
]
```

For real-time linting in your text editor, see [ESLint integrations for editors](http://eslint.org/docs/user-guide/integrations#editors).

## Related

- [eslint-config-standard](https://github.com/feross/eslint-config-standard) for [JavaScript Standard Style Guide](https://github.com/feross/standard)
  - [eslint-config-standard-react](https://github.com/feross/eslint-config-standard-react) (if you are using React)
  - [eslint-config-semistandard](https://github.com/Flet/semistandard) (if you prefer writing semicolons)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) (if you are using React)
- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo/blob/master/index.js) for [XO](https://github.com/sindresorhus/xo) (ESLint-based linter)
  - [eslint-config-xo-react](https://github.com/sindresorhus/eslint-config-xo-react) (if you are using React)

## License

[MIT](LICENSE) © 2016 Vast.com, Inc.
