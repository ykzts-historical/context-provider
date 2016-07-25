# context-provider

Context provider for React.

## Install

```
npm install context-provider
```

## Usage

```javascript
import { provideContext } from 'context-provider';
import React { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

@provideContext({
  name: PropTypes.string.isRequired
})
class App extends Component {
  static contextTypes = {
    name: Prop.string.isRequired
  };

  render() {
    return (
      <div>
        <p>Hello, {this.context.name}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App context={{ name: 'John Doe' }} />,
  document.getElementById('app')
);
```
