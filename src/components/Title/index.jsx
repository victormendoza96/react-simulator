import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './title.scss';

export default function Title({ children, size, className, color = 'white' }) {
  const sizeElements = {
    xl: 'h1',
    lg: 'h2',
    md: 'h3',
    sm: 'h4',
    xs: 'h5',
  };

  const titleClass = clsx(size && `t-${size}`, color && `color-${color}`, className, 'title');

  return React.createElement(
    sizeElements[size] || 'h1',
    {
      className: titleClass,
    },
    children
  );
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
};
