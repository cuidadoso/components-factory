import React, { Component } from 'react';
import pt from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import cn from 'classnames';
import './Avatar.css';

export default class Avatar extends Component {
  static displayName = 'Avatar';
  static propTypes = {
    children: pt.string,
    src: pt.string.isRequired,
    fallback: pt.string.isRequired,
    initial: pt.string.isRequired,
    alt: pt.string,
    // size should be one of two strings: 'small', 'large'
    size: pt.string
  };
  static defaultProps = {
    className: 'avatar-image',
    children: '',
    alt: 'Same image should be here.'
  };

  render() {
    const className = `avatar-${this.props.size}`;

    return (
      <div>
        {this.props.children}
        <ReactImageFallback
          src={this.props.src}
          fallbackImage={this.props.fallback}
          initialImage={this.props.initial}
          alt={this.props.alt}
          className={className}
        />
      </div>
    );
  }
}
