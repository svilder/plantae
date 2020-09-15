import React from 'react';
import ResultCard from './ResultCard';
import './ResultsGrid.css';

const ResultsGrid = (props) => {
  console.log("je suis dans results grid");
  console.log(props);

  const results = props.results.map( result => {
    return <ResultCard key={result.id} result={result} updateSelectedResult={props.updateSelectedResult} />;
  });

  return (
    <div className="ui five column grid">
      {results}
    </div>
  );
};

export default ResultsGrid;
