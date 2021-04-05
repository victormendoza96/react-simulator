import React from 'react';
import PropTypes from 'prop-types';
import CurrencyInput from 'react-currency-input-field';

import './MetricControl.scss';

export default function MetricControl({ InfoValue, isCurrecy, onChange, onBlur, currentValue }) {
  return (
    <div className="Metric-container">
      <span className="Metric-text">{InfoValue}</span>

      <CurrencyInput
        prefix={isCurrecy ? '$ ' : null}
        allowDecimals={false}
        decimalSeparator=","
        groupSeparator="."
        onValueChange={onChange}
        onBlur={onBlur}
        value={currentValue}
      />
    </div>
  );
}

MetricControl.propTypes = {
  InfoValue: PropTypes.string,
  currentValue: PropTypes.number,
  isCurrecy: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
