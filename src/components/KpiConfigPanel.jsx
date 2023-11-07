import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee, faAnchor, faBicycle, faBell, 
  faBolt, faBomb, faBook, faCamera, 
  faCar, faAppleAlt
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  faCoffee, faAnchor, faBicycle, faBell, 
  faBolt, faBomb, faBook, faCamera, 
  faCar, faAppleAlt
];

const KpiConfigPanel = ({ kpi, onSave }) => {
  // Local state for form inputs
  const [name, setName] = useState('');
  const [tooltipText, setTooltipText] = useState('');
  const [icon, setIcon] = useState('');
  const [value, setValue] = useState('');
  const [trend, setTrend] = useState('');

  // Effect to update local state when the kpi prop changes
  useEffect(() => {
    setName(kpi.name);
    setTooltipText(kpi.tooltipText);
    setIcon(kpi.icon);
    setValue(kpi.value);
    setTrend(kpi.trend);
  }, [kpi]);

  // Function to call onSave with the updated KPI object
  const handleSave = () => {
    onSave({
      ...kpi,
      name,
      tooltipText,
      icon,
      value,
      trend
    });
  };

  return (
    <div className="kpi-config-panel">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter KPI name"
        />
      </label>
      <label>
        Tooltip Text:
        <input
          type="text"
          value={tooltipText}
          onChange={(e) => setTooltipText(e.target.value)}
          placeholder="Enter tooltip text"
        />
      </label>
      <label>
        Icon:
        <div className="icon-picker">
          {icons.map((iconObj, index) => (
            <FontAwesomeIcon
              key={index}
              icon={iconObj}
              onClick={() => setIcon(iconObj.iconName)}
              className={`icon-item ${icon === iconObj.iconName ? 'selected' : ''}`}
            />
          ))}
        </div>
      </label>
      <label>
        Value:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter KPI value"
        />
      </label>
      <label>
        Trend:
        <select
          value={trend}
          onChange={(e) => setTrend(e.target.value)}
        >
          <option value="">Select Trend</option>
          <option value="Positive">Positive</option>
          <option value="Neutral">Neutral</option>
          <option value="Negative">Negative</option>
        </select>
      </label>
      <button onClick={handleSave}>Update KPI</button>
    </div>
  );
};

KpiConfigPanel.propTypes = {
  kpi: PropTypes.shape({
    name: PropTypes.string,
    tooltipText: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    trend: PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired
};

export default KpiConfigPanel;