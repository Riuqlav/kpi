import { useState } from 'react';
import KpiCard from './KpiCard';
import KpiConfigPanel from './KpiConfigPanel';

const KpiContainer = () => {
  const [kpis, setKpis] = useState([]);
  const [activeKpiIndex, setActiveKpiIndex] = useState(null);

  const addKpi = () => {
    const newKpi = {
      name: '',
      tooltipText: '',
      icon: '', // Assuming you will use a default icon or empty string for no icon
      value: '',
      trend: '', // Could be 'Positive', 'Neutral', or 'Negative'
    };
    setKpis([...kpis, newKpi]);
  };

  const updateKpi = (index, updatedKpi) => {
    const newKpis = [...kpis];
    newKpis[index] = updatedKpi;
    setKpis(newKpis);
  };

  return (
    <div>
      {kpis.map((kpi, index) => (
        <KpiCard
          key={index}
          active={index === activeKpiIndex}
          {...kpi}
          onClick={() => setActiveKpiIndex(index)}
        />
      ))}
      <button onClick={addKpi}>Add New KPI</button>
      {activeKpiIndex !== null && (
        <KpiConfigPanel
          kpi={kpis[activeKpiIndex]}
          onSave={(updatedKpi) => updateKpi(activeKpiIndex, updatedKpi)}
        />
      )}
    </div>
  );
};

export default KpiContainer;
