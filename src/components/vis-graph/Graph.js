/**
 * Created by apyreev on 30-May-17.
 */
import React, { Component } from 'react';
import pt from 'prop-types';
import { autobind } from 'core-decorators';
import uuid from 'uuid';
import vis from 'vis';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import isEqual from 'lodash/isEqual';
import differenceWith from 'lodash/differenceWith';

export default class Graph extends Component {

  static propTypes = {
    identifier: pt.object,
    graph: pt.object,
    options: pt.object,
    getNetwork: pt.func,
    events: pt.object,
    style: pt.object
  };

  static defaultProps = {
    graph: {},
    getNetwork: pt.function,
    style: { width: '640px', height: '480px' }
  };

  constructor(props) {
    super(props);
    const { identifier } = props;

    this.state = {
      identifier : identifier !== undefined ? identifier : uuid.v4()
    };
  }

  componentDidMount() {
    this.edges = new vis.DataSet();
    this.edges.add(this.props.graph.edges);
    this.nodes = new vis.DataSet();
    this.edges.add(this.props.graph.nodes);
    this.updateGraph();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const nodesChange = !isEqual(this.props.graph.nodes, nextProps.graph.nodes);
    const edgesChange = !isEqual(this.props.graph.edges, nextProps.graph.edges);
    const optionsChange = !isEqual(this.props.options, nextProps.options);
    const eventsChange = !isEqual(this.props.events, nextProps.events);

    if (nodesChange) {
      const idIsEqual = (n1, n2) => n1.id === n2.id;
      const nodesRemoved = differenceWith(this.props.graph.nodes, nextProps.graph.nodes, idIsEqual);
      const nodesAdded = differenceWith(nextProps.graph.nodes, this.props.graph.nodes, idIsEqual);
      const nodesChanged = differenceWith(differenceWith(nextProps.graph.nodes, this.props.graph.nodes, isEqual), nodesAdded);

      this.patchNodes({ nodesRemoved, nodesAdded, nodesChanged });
    }

    if (edgesChange) {
      const edgesRemoved = differenceWith(this.props.graph.edges, nextProps.graph.edges, isEqual);
      const edgesAdded = differenceWith(nextProps.graph.edges, this.props.graph.edges, isEqual);

      this.patchEdges({ edgesRemoved, edgesAdded });
    }

    if (optionsChange) {
      this.Network.setOptions(nextProps.options);
    }

    if (eventsChange) {
      let events = this.props.events || {};

      for (const eventName of Object.keys(events))              {
        this.Network.off(eventName, events[eventName]);
      }

      events = nextProps.events || {};
      for (const eventName of Object.keys(events))        {
        this.Network.on(eventName, events[eventName]);
      }
    }

    return false;
  }

  componentDidUpdate() {
    this.updateGraph();
  }

  patchEdges({ edgesRemoved, edgesAdded }) {
    this.edges.remove(edgesRemoved);
    this.edges.add(edgesAdded);
  }

  patchNodes({ nodesRemoved, nodesAdded, nodesChanged }) {
    this.nodes.remove(nodesRemoved);
    this.nodes.add(nodesAdded);
    this.nodes.update(nodesChanged);
  }

  @autobind
  updateGraph() {
    const container = document.getElementById(this.state.identifier);
    const defaultOptions = {
      autoResize: false,
      physics: {
        stabilization: false
      },
      edges: {
        smooth: false,
        color: '#000000',
        width: 0.5,
        arrows: {
          to: {
            enabled: true,
            scaleFactor: 0.5
          }
        }
      }
    };

    // merge user provied options with our default ones
    const options = defaultsDeep(defaultOptions, this.props.options);

    this.Network = new vis.Network(
          container,
          Object.assign(
              {},
              this.props.graph,
            {
              edges: this.edges,
              nodes: this.nodes
            }
          ),
          options
      );

    if (this.props.getNetwork) {
      this.props.getNetwork(this.Network);
    }

    // Add user provied events to network
    const events = this.props.events || {};

    for (const eventName of Object.keys(events)) {
      this.Network.on(eventName, events[eventName]);
    }
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
