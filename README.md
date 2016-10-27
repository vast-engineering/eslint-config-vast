# eslint-config-vast
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) Vast's JavaScript coding standards

[![NPM version](https://badge.fury.io/js/eslint-config-vast.svg)](https://www.npmjs.org/package/eslint-config-vast) [![Dependency Status](https://david-dm.org/vast-engineering/eslint-config-vast.svg)](https://david-dm.org/vast-engineering/eslint-config-vast) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast/dev-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast?type=dev) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast/peer-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast?type=peer)

## Installation

    npm install eslint-config-vast --save-dev

## Usage

**For server-side (Node.js) code**

Create `.eslintrc` file in the root of your project with the following config:

```javascript
{
  "extends": "eslint-config-vast",
  "rules": {
    // Your overrides...
  }
}
```

**For client-side code**

Since the default settings are for server-side, in case you want to use the config for a client-side project, or in case you want to add an additional `.stylelintrc` file in a client-side code folder (e.g. `/client/.eslintrc`), use the following config:

```javascript
{
    "extends": "eslint-config-vast",
    "env": {
        "browser": true,
        "es6": false // if you're not using Babel
    },
    "parserOptions": {
        "sourceType": "module", // if you're using Babel
        "ecmaVersion": 8 // if you're using Babel
    },
    "globals": {
            "SOME_GLOBAL": false
    },
    "rules": {
        // Your overrides...
    }
}
```

### Setting up ESLint

If you haven’t already set up ESLint on your project, run:

    npm install eslint --save-dev

Add "eslint" to "scripts" in `package.json` (wrap globstar pattern with single quotes):

```json
"scripts": {
    "eslint": "eslint js tests *.js --ignore-pattern 'js/vendor/**/*.js'"
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

**Tip:** For real-time linting in your text editor, see [ESLint integrations for editors](http://eslint.org/docs/user-guide/integrations#editors).

**Tip:** Run `eslint --fix /path/to/file.js` to [automatically fix](http://eslint.org/docs/user-guide/command-line-interface#fix) as many issues as possible.

**Tip:** You can create a personal configuration file in your home directory (`~/.eslintrc`), it will only be used if no other configuration files are found. See [Configuration Cascading and Hierarchy](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy). But make sure to all install dependencies globally with `-g` flag.

## Related

- [eslint-config-vast-react](https://github.com/vast-engineering/eslint-config-vast-react) for React
- [eslint-config-standard](https://github.com/feross/eslint-config-standard) for [JavaScript Standard Style Guide](https://github.com/feross/standard)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for React
- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo/) for [XO](https://github.com/sindresorhus/xo) (ESLint-based linter)
  - [eslint-config-xo-react](https://github.com/sindresorhus/eslint-config-xo-react) for React

## License

[MIT](LICENSE) © 2016 Vast.com, Inc.
