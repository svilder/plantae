import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui search margin-bottom">
        <form onSubmit={this.onFormSubmit} className="ui big icon input">
          <input 
            className="prompt" 
            type="text" 
            placeholder="Common names for plants..." 
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <i className="search icon"></i>
        </form>
      </div>
    );
  };
};

export default SearchBar;