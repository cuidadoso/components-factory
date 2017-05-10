/**
 * Created by apyreev on 10-May-17.
 */
import React, { PropTypes as pt } from 'react';
import { autobind } from 'core-decorators';
import Select from 'react-select';
import './SelectMenu.css';

import { _Component } from '../../core';

export default class SelectMenu extends _Component {
  static propTypes = {
    options: pt.array
  };

  static defaultTypes = {
    options: [
          { value: 10, label: 'Ten', clearableValue: false },
          { value: 11, label: 'Eleven', clearableValue: false },
          { value: 12, label: 'Twelve', clearableValue: false },
          { value: 23, label: 'Twenty-three', clearableValue: false },
          { value: 24, label: 'Twenty-four', clearableValue: false }
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options,
      matchPos: 'any',
      matchValue: true,
      matchLabel: true,
      value: null,
      multi: false
    };
  }

  @autobind
  handleChange(value) {
    this._setState({ value });
    console.log('Numeric Select value changed to', value);
  }

  render() {
    return (
      <Select
        name='select-menu'
        options={this.state.options}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
