import React from 'react';

const FilterBar = ({ filterOptions, setFilterOptions }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-bar">
      <select
        name="type"
        value={filterOptions.type}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="non-vegetarian">Non-Vegetarian</option>
      </select>
      <input
        type="number"
        name="minTime"
        value={filterOptions.minTime}
        onChange={handleChange}
        placeholder="Min Time"
      />
      <input
        type="number"
        name="maxTime"
        value={filterOptions.maxTime}
        onChange={handleChange}
        placeholder="Max Time"
      />
    </div>
  );
};

export default FilterBar;
