import React, { Component } from 'react';
import pt from 'prop-types';
import './Button.css';

class Button extends Component {
  static displayName = 'Button';
  static propTypes = {
    children: pt.string.isRequired,
    onClick: pt.func
  };

  render() {
    return (
      <div>
        <button className='button-style' onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
