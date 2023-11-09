// Importing React hooks and components
import { useState } from 'react';
import KpiCard from './KpiCard';
import KpiConfigPanel from './KpiConfigPanel';
import styles from './KpiContainer.module.css';

// Defines the main container component for KPIs
const KpiContainer = () => {
  // State for storing the list of KPIs
  const [kpis, setKpis] = useState([]);
  // State to track the currently active KPI for configuration
  const [activeKpiIndex, setActiveKpiIndex] = useState(null);

  // Function to add a new KPI to the list
  const addKpi = () => {
    const newKpi = {
      name: '',
      tooltipText: '',
      icon: '', // Placeholder for KPI icon
      value: '',
      trend: '', // This could represent the KPI trend (positive, neutral, negative)
    };
    setKpis([...kpis, newKpi]); // Appends the new KPI to the existing list
  };

  // Function to update a specific KPI's data
  const updateKpi = (index, updatedKpi) => {
    const newKpis = [...kpis]; // Cloning the current KPIs array
    newKpis[index] = updatedKpi; // Replacing the KPI at the given index
    setKpis(newKpis); // Setting the new KPIs array to state
  };

  // Render the component UI
  return (
    <div className={styles.container}>
      {/* Mapping over kpis array to render KpiCard for each KPI */}
      {kpis.map((kpi, index) => (
        <KpiCard
          key={index}
          active={index === activeKpiIndex} // Setting active state based on index comparison
          {...kpi} // Passing KPI data as props
          onClick={() => setActiveKpiIndex(index)} // Setting the active KPI on click
        />
      ))}
      {/* Button to add a new KPI */}
      <button onClick={addKpi}>Add New KPI</button>
      {/* Conditionally rendering the KpiConfigPanel for the active KPI */}
      {activeKpiIndex !== null && (
        <KpiConfigPanel
          kpi={kpis[activeKpiIndex]} // Passing the active KPI data as props
          onSave={(updatedKpi) => updateKpi(activeKpiIndex, updatedKpi)} // Handler to save updated KPI
        />
      )}
    </div>
  );
};

export default KpiContainer;
