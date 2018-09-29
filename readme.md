# new_app_template

A template meant to be used to quick start new web applications.

### Tech stack

Uses a number of open source projects:

* [React](https://github.com/facebook/react)
* [React Router](https://github.com/ReactTraining/react-router)
* [Webpack](https://github.com/webpack)
* [Babel](https://github.com/babel/babel)
* [ESLint](https://github.com/eslint/eslint)
* [Flow](https://github.com/facebook/flow)

### Installation

Requires [Node.js](https://nodejs.org) to run.

Install the dependencies and start the dev-server.

```sh
$ cd new_app_template
$ npm install
$ npm start
```

Alternatively, you can also start the dev-server in production mode.
```sh
$ npm run start-prod
```

To simply build the application(depending on the mode you want).
```sh
$ npm run build
$ npm run build-prod
```

You can also check and analyze your bundle size in production mode.
```sh
$ npm run analyze-bundle
```