import Slider from 'rc-slider';
import PropTypes from 'prop-types';

import 'rc-slider/assets/index.css';
import './slideControl.scss';

export default function SlideControl({ minValue, maxValue, slideValue, onChange, prefix }) {
  return (
    <div>
      <div className="slide-container">
        <Slider min={minValue} max={maxValue} onChange={onChange} value={slideValue} />
      </div>
      <div className={`slide-limit ${!prefix && 'p-space'}`}>
        <span>
          {prefix} {minValue.toLocaleString('de-DE')}
        </span>
        <span>
          {prefix} {maxValue.toLocaleString('de-DE')}
        </span>
      </div>
    </div>
  );
}

SlideControl.propTypes = {
  prefix: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  slideValue: PropTypes.number,
  onChange: PropTypes.func,
};
