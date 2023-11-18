    /* eslint-disable no-unused-vars */
    /* eslint-disable react/prop-types */
    import { useState } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {
      faCircleInfo,
      faArrowUp,
      faArrowDown,
      faGripLines,
      faCoffee,
      faAnchor,
      faBicycle,
      faBell,
      faBolt,
      faBomb,
      faBook,
      faCamera,
      faCar,
      faAppleAlt,
    } from '@fortawesome/free-solid-svg-icons';


// Importing trend images and styles
import upTrendImage from '../assets/UP.png'; 
import midTrendImage from '../assets/MID.png'; 
import downTrendImage from '../assets/DOWN.png'; 
import styles from './KpiCard.module.css';

const iconMapping = {
  circleInfo: faCircleInfo,
  arrowUp: faArrowUp,
  arrowDown: faArrowDown,
  gripLines: faGripLines,
  coffee: faCoffee,
  anchor: faAnchor,
  bicycle: faBicycle,
  bell: faBell,
  bolt: faBolt,
  bomb: faBomb,
  book: faBook,
  camera: faCamera,
  car: faCar,
  appleAlt: faAppleAlt,
};

// Defines the KPI card component
const KpiCard = ({ name, tooltipText, icon, value, trend, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Selects the FontAwesome icon based on the icon prop
  const selectedIcon = iconMapping[icon]; 

  // Function to return the appropriate trend image based on the trend value
  const getTrendIcon = (trendValue) => {
    const trendIcons = {
      Positive: <img src={upTrendImage} alt="Up Trend" className={styles['trend-image']} />,
      Neutral: <img src={midTrendImage} alt="Neutral Trend" className={styles['trend-image']} />,
      Negative: <img src={downTrendImage} alt="Down Trend" className={styles['trend-image']} />,
    };
    return trendIcons[trendValue] || null;
  };

  return (
    <div className={`${styles['kpi-card']} ${active ? styles['active'] : ''}`} onClick={onClick}>
      {/* Icon container, conditionally rendered if selectedIcon exists */}
      <div className={styles['icon-top-right']}>
        {selectedIcon && <FontAwesomeIcon icon={selectedIcon} />}
      </div>
      {/* Container for KPI name and info icon */}
      <div className={styles['kpi-name-container']}>
        <div className={styles['kpi-name']}>{name || 'KPI Name'}</div>
        {/* Info icon with hover effect to show tooltip */}
        <FontAwesomeIcon 
          icon={faCircleInfo} 
          className={styles['info-icon']} 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {/* Tooltip text, shown when the info icon is hovered */}
        {isHovered && (
          <div className={styles['tooltip']}>
            {tooltipText}
          </div>
        )}
      </div>
  
      {/* Container for the KPI value and trend icon */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles['kpi-value']}>
          {value || 'KPI Value'}
        </div>
        {/* Renders the trend icon based on the trend prop */}
        {trend && getTrendIcon(trend)}
      </div>
    </div>
  );
};

export default KpiCard;