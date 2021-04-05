import PropTypes from 'prop-types';

import clsx from 'clsx';

// Css
import './button.scss';

export default function Button({ children, handleClick = null, bgColor, className }) {
  const buttonClass = clsx(bgColor && `bg-${bgColor}`, className, 'button');

  return (
    <button type="button" className={buttonClass} onClick={handleClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  isCurrecy: PropTypes.bool,
  handleClick: PropTypes.func,
};
