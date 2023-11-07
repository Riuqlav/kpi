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
import upTrendImage from '../assets/UP.png'; 
import midTrendImage from '../assets/MID.png'; 
import downTrendImage from '../assets/DOWN.png'; 
import styles from './KpiCard.module.css';


const KpiCard = ({ name, tooltipText, icon, value, trend, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const selectedIcon = iconMapping[icon];

  const getTrendIcon = (trend) => {
    const trendIcons = {
      Positive: <img src={upTrendImage} alt="Up Trend" />,
      Neutral: <img src={midTrendImage} alt="Neutral Trend" />,
      Negative: <img src={downTrendImage} alt="Down Trend" />,
    };
    return trendIcons[trend] || null;
  };

  return (
    <div 
      className={`${styles['kpi-card']} ${active ? styles['active'] : ''}`} 
      onClick={onClick} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && selectedIcon && (
        <div className={styles['kpi-icon']}>
          <FontAwesomeIcon icon={selectedIcon} />
        </div>
      )}
      <div className={styles['kpi-name']}>{name || 'KPI Name'}</div>
      <div className={styles['kpi-value']}>{value || 'KPI Value'}</div>
      {trend && (
        <div className={styles['trend-icon']}>
          {getTrendIcon(trend)}
        </div>
      )}
      {isHovered && tooltipText && (
        <div className={styles['tooltip']}>{tooltipText}</div>
      )}
    </div>
  );  
};

export default KpiCard;