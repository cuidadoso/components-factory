/**
 * Created by apyreev on 30-May-17.
 */
import React, { Component, PropTypes as pt } from 'react';
import uuid from 'uuid';

export default class VisGraph extends Component {

  static propTypes = {
    identifier: pt.object,
    style: pt.string
  };

  static defaultProps = {
    style: null
  };

  constructor(props) {
    super(props);
    const { identifier } = props;

    // this.updateGraph = this.updateGraph.bind(this);
    this.state = {
      identifier : identifier !== undefined ? identifier : uuid.v4()
    };
  }

  render() {
    const { identifier } = this.state;
    const { style } = this.props;

    return (
      <div id={identifier} style={style}>
        identifier
      </div>
    );
  }
}
