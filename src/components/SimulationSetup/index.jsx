import React from 'react';
import MetricControl from '../MetricControl';
import SlideControl from '../SlideControl';
import PropTypes from 'prop-types';

import './SimulationSetup.scss';

export default function SimulationSetup({
  isCurrecy = false,
  InfoValue,
  maxValue,
  minValue,
  currentValue,
  sliderChange,
  MetricChange,
  MetricBlur,
}) {
  return (
    <div className="setup-container">
      <MetricControl
        isCurrecy={isCurrecy}
        InfoValue={InfoValue}
        minValue={minValue}
        currentValue={currentValue}
        onChange={MetricChange}
        onBlur={MetricBlur}
      />
      <SlideControl
        slideValue={currentValue}
        maxValue={maxValue}
        minValue={minValue}
        prefix={isCurrecy ? '$ ' : null}
        onChange={sliderChange}
      />
    </div>
  );
}

SimulationSetup.propTypes = {
  InfoValue: PropTypes.string.isRequired,
  currentValue: PropTypes.number,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  isCurrecy: PropTypes.bool,
  sliderChange: PropTypes.func,
};
