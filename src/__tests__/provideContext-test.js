jest.unmock('../provideContext');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import provideContext from '../provideContext';

describe('provideContext', () => {
  class Child extends Component {
    render() {
      return (
        <div />
      );
    }
  }

  class MockApp extends Component {
    static displayName = 'Mock';

    static contextTypes = {
      string: PropTypes.string.isRequired
    };

    render() {
      return (
        <div>
          <h1>{this.context.string}</h1>
          <Child />
        </div>
      );
    }
  }

  it('displayName', () => {
    const Component = provideContext({})(MockApp);
    expect(Component.displayName).toBe('ContextProvider(Mock)');
  });

  it('childContextTypes', () => {
    const Component = provideContext({
      number: PropTypes.number,
      string: PropTypes.string
    })(MockApp);
    expect(Component.childContextTypes.number).toBe(PropTypes.number);
    expect(Component.childContextTypes.string).toBe(PropTypes.string);
  });

  it('pass context', () => {
    const Component = provideContext({
      string: PropTypes.string
    })(MockApp);
    const context = { string: 'string' };
    const component = TestUtils.renderIntoDocument(
      <Component context={context} />
    );
    const node = ReactDOM.findDOMNode(component);
    expect(node.querySelector('h1').textContent).toEqual('string');
  });
});
