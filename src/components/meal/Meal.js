/**
 * Created by Alejandro on 28.03.2017.
 */
import React, { Component, PropTypes as pt } from 'react';

class Meal extends Component {
  render() {
    return (
      <div>
        <h2><a href='/'>Home</a></h2>
        <h2>Meal list</h2>
        <table id='table'>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Calories</th>
            <th>Exceed</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default Meal;
