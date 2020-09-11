import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

const App = () => {
  return (
  <div className="ui container" style={{marginTop: '32px'}}>
    <Header />
    <SearchBar />
    <div>Chikidipah</div>
  </div>
  );
};

export default App;