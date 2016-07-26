# context-provider

Context provider for React. Inspired from [`fluxible-addons-react/provideContext`](https://github.com/yahoo/fluxible/blob/generator-fluxible-v1.2.6/packages/fluxible-addons-react/docs/api/provideContext.md).

## Install

```shell
$ npm install context-provider
```

## Usage

### with [Babel](https://babeljs.io)

[`babel-preset-es2015`](https://www.npmjs.com/package/babel-preset-es2015) and [`babel-preset-react`](https://www.npmjs.com/package/babel-preset-react), [`babel-plugin-transform-decorators-legacy`](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy), [`babel-plugin-transform-class-properties`](https://www.npmjs.org/package/babel-plugin-transform-class-properties) is required.

```javascript
import provideContext from 'context-provider/lib/provideContext';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  static contextTypes = {
    userName: PropTypes.string.isRequired
  };

  render() {
    return (
      <header>
        <h1>Hello, {this.context.userName}.</h1>
      </header>
    );
  }
}

@provideContext({
  userName: PropTypes.string.isRequired
})
class App extends Component {
  static contextTypes = {
    userName: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <Header />
        <p>Hi! {this.context.userName}!</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App context={{ userName: 'John Doe' }} />,
  document.getElementById('app')
);
```

### Legacy style

```javascript
var provideContext = require('context-provider/lib/provideContext');
var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  contextTypes: {
    userName: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement(
      'header',
      null,
      React.createElement(
        'h1',
        null,
        'Hello, ',
        this.context.userName,
        '.'
      )
    );
  }
});

var App = React.createClass({
  contextTypes: {
    userName: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, null),
      React.createElement(
        'p',
        null,
        'Hi! ',
        this.context.userName,
        '!'
      )
    );
  }
});

App = provideContext({
  userName: React.PropTypes.string.isRequired
})(App);

ReactDOM.render(
  React.createElement(App, {
    context: { userName: 'Joe Doe' }
  }),
  document.getElementById('app')
);
```

## License

MIT
