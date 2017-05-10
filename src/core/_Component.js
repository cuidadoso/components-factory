/**
 * Created by apyreev on 10-May-17.
 */
import React, { Component } from 'react';

class _Component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _isMounted: false
    };
  }

  componentDidMount() {
    this.setState({ _isMounted: true });
    this._componentDidMount();
  }

  componentWillUnmount() {
    this.setState({ _isMounted: false });
    this._componentWillUnmount();
  }

  _componentDidMount() {
        // Implement addition actions after component mounting
  }

  _componentWillUnmount() {
        // Implement addition actions before component mounting
  }

  _setState(newState) {
    if (this.state._isMounted) {
      this.setState(newState);
    }
  }
}

export default _Component;
