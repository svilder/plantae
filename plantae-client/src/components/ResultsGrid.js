import React from 'react';
import ResultCard from './ResultCard';
import './ResultsGrid.css';

const ResultsGrid = (props) => {
  const results = props.results.map( result => {
    return <ResultCard  />
  })
  console.log(props.results);
  return (
    <div className="ui five column grid">
      
    </div>
  );
};

export default ResultsGrid;