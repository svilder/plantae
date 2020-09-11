import React from 'react';
import GridItem from './GridItem';
import './ResultsGrid.css';

const ResultsGrid = () => {
  return (
    <div className="ui five column grid">
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </div>
  );
};

export default ResultsGrid;