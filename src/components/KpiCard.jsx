/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faArrowUp, faArrowDown, faGripLines } from '@fortawesome/free-solid-svg-icons';

const KpiCard = ({ name, tooltipText, value, trend, active, onClick }) => {
  // Determine the icon based on the trend
  const getTrendIcon = (trend) => {
    const trendIcons = {
      Positive: faArrowUp,
      Neutral: faGripLines,
      Negative: faArrowDown,
    };
    return trendIcons[trend] || null;
  };

  return (
    <div className={`kpi-card ${active ? 'active' : ''}`} onClick={onClick}>
      {/* Conditionally render the tooltip icon if there is a tooltipText */}
      {tooltipText && (
        <div className="tooltip-icon">
          <FontAwesomeIcon icon={faCircleInfo} title={tooltipText} />
        </div>
      )}
      <div className="kpi-name">{name || 'KPI Name'}</div>
      <div className="kpi-value">{value || 'KPI Value'}</div>
      {/* Render trend icon based on the trend value */}
      {trend && (
        <div className="trend-icon">
          <FontAwesomeIcon icon={getTrendIcon(trend)} />
        </div>
      )}
    </div>
  );
};

export default KpiCard;
