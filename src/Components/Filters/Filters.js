import React, { useState } from 'react';

const Dropdown = ({ startYear, endYear }) => {
  const [years, setYears] = useState(
    ((startYear, endYear) => {
      let tabYears = [];
      for (let i = startYear; i < endYear; i++) {
        tabYears.push(i);
      }
      return tabYears;
    })(startYear, endYear),
  );

  return (
    <select>
      {years.map((year, index) => {
        return (
          <option key={index} value={year}>
            {year}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
