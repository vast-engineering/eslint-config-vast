# eslint-config-vast
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) Vast's JavaScript coding standards

[![NPM version](https://badge.fury.io/js/eslint-config-vast.svg)](https://www.npmjs.org/package/eslint-config-vast) [![Dependency Status](https://david-dm.org/vast-engineering/eslint-config-vast.svg)](https://david-dm.org/vast-engineering/eslint-config-vast) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast/dev-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast?type=dev) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast/peer-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast?type=peer)

This config can be used for linting server-side and client-side JavaScript.

If you are using React, extend this config with [eslint-config-vast-react](https://github.com/vast-engineering/eslint-config-vast-react) to add support for React's specific JSX syntax, and to add additional checks for React, JSX, and accessibility.

## Installation

    npm install eslint-config-vast --save-dev

## Usage

**For Node.js environment (ES6):**

Create `.eslintrc` file in the root of your project with the following settings:

```javascript
{
    "extends": "eslint-config-vast",
    "rules": {
        // Your overrides...
    }
}
```

**For browser environment with ES6/ES7/ES8 to ES5 transpiler:**

Create an additional `.stylelintrc` file in a client-side code folder (e.g. `client/.eslintrc`) with the following settings:

```javascript
{
    "env": {
        "browser": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8
    },
    "globals": {
        "GLOBAL1": false,
        "GLOBAL2": false
    },
    "rules": {
        // Your overrides...
    }
}
```

> **Note:** You don't need to use babel-eslint (`"parser": "babel-eslint"`) if you are using ES2015 (ES6), ES2016 (ES7) or ES2017 (ES8).
>
> ESLint actually supports ES2015/ES2016/ES2017, JSX, and object rest/spread by default now.
>
> At the moment, you'll need it if you use stuff like class properties, decorators, async/await, types.

**For browser environment without ES6/ES7/ES8 to ES5 transpiler:**

Create an additional `.stylelintrc` file in a client-side code folder (e.g. `client/.eslintrc`) with the following settings:

```javascript
{
    "env": {
        "browser": true,
        "es6": false
    },
    "globals": {
        "GLOBAL1": false,
        "GLOBAL2": false
    },
    "rules": {
        // Disable es6-related rules for es5 environment
        "object-shorthand": 0,
        "prefer-arrow-callback": 0,
        "prefer-template": 0,
        "prefer-spread": 0,
        "prefer-rest-params": 0
    }
}
```

### Setting up ESLint

If you haven’t already set up ESLint on your project, run:

    npm install eslint --save-dev

Add "eslint" to "scripts" in `package.json`:

```json
"scripts": {
    "eslint": "eslint app tests *.js --ext .js --ext .jsx --ignore-pattern 'js/vendor'"
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

**Tip:** Run `eslint --fix /path/to/file.js` to [automatically fix](http://eslint.org/docs/user-guide/command-line-interface#fix) as many issues as possible. Another way to autoformat the code is with the editor plugin, such as [ESLint-Formatter](https://packagecontrol.io/packages/ESLint-Formatter) for Sublime Text.

**Tip:** You can create a personal configuration file in your home directory (`~/.eslintrc`), it will only be used if no other configuration files are found. See [Configuration Cascading and Hierarchy](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy). But make sure to all install dependencies globally with `-g` flag.

## Related

- [eslint-config-vast-react](https://github.com/vast-engineering/eslint-config-vast-react) for React

## Other configs

- [eslint-config-standard](https://github.com/feross/eslint-config-standard) for [JavaScript Standard Style Guide](https://github.com/feross/standard)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) for [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo/) for [XO](https://github.com/sindresorhus/xo) ESLint-based linter

## License

[MIT](LICENSE) © 2016 Vast.com, Inc.
