import React, { Component, PropTypes } from 'react';

export default function provideContext(contextTypes) {
  return function(ComposedComponent) {
    const componentName = (
      ComposedComponent.displayName ||
      ComposedComponent.name ||
      'Component'
    );

    return class ContextProvider extends Component {
      static displayName = `ContextProvider(${componentName})`;

      static childContextTypes = {...contextTypes || {}};

      static propTypes = {
        context: PropTypes.object.isRequired
      };

      getChildContext() {
        const childContext = {};
        if (typeof contextTypes !== 'undefined') {
          const context = this.props.context;
          for (const key in contextTypes) {
            if (contextTypes.hasOwnProperty(key) && context[key]) {
              childContext[key] = context[key];
            }
          }
        }
        return childContext;
      }

      render() {
        const { context, ...props } = this.props;
        return (
          <ComposedComponent {...props} />
        );
      }
    };
  };
}
