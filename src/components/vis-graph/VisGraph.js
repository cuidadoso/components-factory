/**
 * Created by apyreev on 30-May-17.
 */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import Graph from './Graph';
import { inGraph, options, events } from './Constants';

export default class ExampleGraph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      graph: inGraph
    };
  }

  @autobind
  clickHandler() {
    const { graph } = this.state;
    const nodes = Array.from(graph.nodes);

    this.counter = this.counter || 5;
    this.counter++;
    if (Math.random() > 0.5) {
      nodes.pop();
      this.setState({ graph: { ...graph, nodes } });
    } else {
      this.setState({
        graph: {
          ...graph,
          nodes: [
                        { id: this.counter, label: `Node ${this.counter}`, color: '#41e0c9' },
            ...nodes
          ],
          edges: [
                        { from: graph.nodes[Math.floor(Math.random() * graph.nodes.length)].id, to: this.counter },
            ...graph.edges
          ]
        }
      });
    }
  }

  render() {
    return (
      <div onClick={this.clickHandler.bind(this)}>
        <Graph graph={this.state.graph} options={options} events={events}/>
      </div>
    );
  }
}
