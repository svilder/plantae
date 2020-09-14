import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import plantae from '../api/plantae';
import ResultsGrid from './ResultsGrid';
import ResultSelected from './ResultSelected';

class App extends React.Component {
  state = { results: [] };

  // Sur la liste de results, écouter le click pour sélectionner un result
  // selectionner le result dans la liste et envoyer ses infos en props au ResultSelected
  // <ResultSelected key={result.id} result={result} />

  onSearchSubmit = async (term) => {
    const response = await plantae.get('/api/v1/plants', {
      params: { query: term }
    });
    console.log(response.data);
    this.setState({results: response.data});
  };

  componentWillMount() {
    console.log("toto");
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '32px'}}>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ResultsGrid results={this.state.results} />
        <ResultSelected result={this.componentWillMount} />
      </div>
    );
  };
};

export default App;