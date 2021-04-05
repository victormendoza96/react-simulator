import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import './panel.scss';

export default function Panel({ panelText, monthlyFee, prefix = '$' }) {
  return (
    <div className="panel">
      <Text inline size="md">
        {panelText}
      </Text>
      <Text inline lead size="sm">
        {prefix} {monthlyFee}
      </Text>
    </div>
  );
}

Panel.propTypes = {
  panelText: PropTypes.string,
  prefix: PropTypes.string,
  monthlyFee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
