import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsGrid from './ResultsGrid';
import ResultSelected from './ResultSelected';

class App extends React.Component {
  state = { results: [] };
  render() {
    return (
      <div className="ui container" style={{marginTop: '32px'}}>
        <Header />
        <SearchBar />
        <ResultsGrid results={this.state.results} />
        <hr />
        <ResultSelected />
      </div>
    );
  }
};

export default App;