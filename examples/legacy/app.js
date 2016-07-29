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
    context: { userName: 'John Doe' }
  }),
  document.getElementById('app')
);
