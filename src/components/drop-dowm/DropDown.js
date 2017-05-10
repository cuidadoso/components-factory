/**
 * Created by apyreev on 10-May-17.
 */
import React, { Component, PropTypes as pt } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
// import '../../styles/bootstrup.css';

export default class DropDown extends Component {
  render() {
    return (
      <DropdownButton title='Dropdown'>
        <MenuItem href='#books'>Books</MenuItem>
        <MenuItem href='#podcasts'>Podcasts</MenuItem>
        <MenuItem href='#'>Tech I Like</MenuItem>
        <MenuItem href='#'>About me</MenuItem>
        <MenuItem href='#addBlog'>Add a Blog</MenuItem>
      </DropdownButton>
    );
  }
}
