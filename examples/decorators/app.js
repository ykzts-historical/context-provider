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
