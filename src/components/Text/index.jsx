import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './text.scss';

export default function Text({ children, inline, className, size, color = 'white', lead }) {
  const textStyle = clsx(size && `${size}`, lead && `lead`, color && `color-${color}`, className, 'mrc-simulator');
  return React.createElement(
    inline ? 'span' : 'p',
    {
      className: textStyle,
    },
    children
  );
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  inline: PropTypes.bool,
  lead: PropTypes.bool,
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
};
