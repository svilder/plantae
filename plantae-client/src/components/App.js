import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsGrid from './ResultsGrid';
import SelectedItem from './SelectedItem';

const App = () => {
  return (
  <div className="ui container" style={{marginTop: '32px'}}>
    <Header />
    <SearchBar />
    <ResultsGrid />
    <hr />
    <SelectedItem />
    
  </div>
  );
};

export default App;