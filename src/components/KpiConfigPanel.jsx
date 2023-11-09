import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes for type-checking
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importing specific icons from FontAwesome
import {
  faCoffee, faAnchor, faBicycle, faBell, 
  faBolt, faBomb, faBook, faCamera, 
  faCar, faAppleAlt
} from '@fortawesome/free-solid-svg-icons';

// Array of icons for selection
const icons = [
  faCoffee, faAnchor, faBicycle, faBell, 
  faBolt, faBomb, faBook, faCamera, 
  faCar, faAppleAlt
];

// Component for the KPI configuration panel
const KpiConfigPanel = ({ kpi, onSave }) => {
  // States for form fields
  const [name, setName] = useState('');
  const [tooltipText, setTooltipText] = useState('');
  const [icon, setIcon] = useState('');
  const [value, setValue] = useState('');
  const [trend, setTrend] = useState('');

  // Effect hook to set local state when kpi prop updates
  useEffect(() => {
    setName(kpi.name);
    setTooltipText(kpi.tooltipText);
    setIcon(kpi.icon);
    setValue(kpi.value);
    setTrend(kpi.trend);
  }, [kpi]);

  // Call back Function to handle save action
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

  // Render configuration panel form
  return (
    <div className="kpi-config-panel">
      {/* Input field for KPI name */}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter KPI name"
        />
      </label>
      {/* Input field for KPI tooltip text */}
      <label>
        Tooltip Text:
        <input
          type="text"
          value={tooltipText}
          onChange={(e) => setTooltipText(e.target.value)}
          placeholder="Enter tooltip text"
        />
      </label>
      {/* Icon picker */}
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
      {/* Input field for KPI value */}
      <label>
        Value:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter KPI value"
        />
      </label>
      {/* Dropdown for KPI trend */}
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

// PropType validation for the KpiConfigPanel component
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
