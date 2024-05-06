import React, { useState } from "react";
import { Collapse } from "react-collapse";

interface CollapsibleTableProps {
  data: number[]; // Assuming numerical data for simplicity
}

const CollapsibleTable: React.FC<CollapsibleTableProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [mode, setMode] = useState<string>("multi-year");
  const [startYear, setStartYear] = useState<number>(2024);
  const [endYear, setEndYear] = useState<number>(2025);
  const [scenarios, setScenarios] = useState<number>(1);

  const toggleCollapse = () => setIsOpen(!isOpen);

  const handleYearChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "start" | "end",
  ) => {
    const year = parseInt(e.target.value, 10);
    if (type === "start") {
      setStartYear(year);
      if (mode === "multi-year") {
        setEndYear(Math.min(year + 4, startYear + scenarios - 1));
      }
    } else {
      setEndYear(Math.max(year, startYear));
    }
  };

  const handleScenarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const scenarioCount = parseInt(e.target.value, 10);
    setScenarios(scenarioCount);
    if (mode === "multi-scenario") {
      setEndYear(startYear);
    }
  };

  const renderYears = () => {
    if (mode === "multi-year") {
      return Array.from(
        { length: Math.min(5, endYear - startYear + 1) },
        (_, index) => <th key={index}>Year {startYear + index}</th>,
      );
    } else {
      return Array.from({ length: Math.min(5, scenarios) }, (_, index) => (
        <th key={index}>Scenario {index + 1}</th>
      ));
    }
  };

  return (
    <div>
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="multi-year">Multi-Year</option>
        <option value="multi-scenario">Multi-Scenario</option>
      </select>

      <input
        type="number"
        value={startYear}
        onChange={(e) => handleYearChange(e, "start")}
      />
      {mode === "multi-year" && (
        <input
          type="number"
          value={endYear}
          onChange={(e) => handleYearChange(e, "end")}
        />
      )}
      {mode === "multi-scenario" && (
        <input
          type="number"
          value={scenarios}
          onChange={handleScenarioChange}
        />
      )}

      <button onClick={toggleCollapse}>Toggle Visibility</button>
      <Collapse isOpened={isOpen}>
        <table>
          <thead>
            <tr>{renderYears()}</tr>
          </thead>
          <tbody>
            <tr>
              {data
                .slice(
                  0,
                  mode === "multi-year" ? endYear - startYear + 1 : scenarios,
                )
                .map((yearData, index) => (
                  <td key={index}>{yearData}</td>
                ))}
            </tr>
          </tbody>
        </table>
      </Collapse>
    </div>
  );
};

export default CollapsibleTable;
