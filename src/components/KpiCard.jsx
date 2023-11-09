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
          
          {/* Container for the dynamic icon in the top right */}
          <div className={styles['icon-top-right']}>
            {selectedIcon && <FontAwesomeIcon icon={selectedIcon} />}
          </div>
    
          {/* KPI Name with Info Icon */}
          <div className={styles['kpi-name-container']}>
            <div className={styles['kpi-name']}>{name || 'KPI Name'}</div>
            <FontAwesomeIcon 
              icon={faCircleInfo} 
              className={styles['info-icon']} 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            {isHovered && (
              <div className={styles['tooltip']}>
                {tooltipText}
              </div>
            )}
          </div>
      
          {/* KPI Value and Trend graph */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles['kpi-value']}>
              {value || 'KPI Value'}
            </div>
            {trend && getTrendIcon(trend)}
          </div>
        </div>
      );
    };
    
    export default KpiCard;