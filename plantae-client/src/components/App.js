import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import plantae from '../api/plantae';
import ResultsGrid from './ResultsGrid';
import ResultSelected from './ResultSelected';

class App extends React.Component {
  state = { results: [] };

  onSearchSubmit = async (term) => {
  
    // const resultsDisplay = '';
    // if no result is selected {
    //  return <ResultsGrid results={this.state.results} />;
    // } else {
    //   return <ResultSelected />;
    // }
    // {resultsDisplay}
  
    const response = await plantae.get('/api/v1/plants', {
      params: { query: term }
    });
    console.log(response);
    this.setState({results: response.data});
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: '32px'}}>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  };
};

export default App;