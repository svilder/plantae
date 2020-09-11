import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';

const App = () => {
  return (
  <div className="ui container" style={{marginTop: '32px'}}>
    <Header />
    <SearchBar />
    <Results />
    <div>Chikidipah</div>
  </div>
  );
};

export default App;