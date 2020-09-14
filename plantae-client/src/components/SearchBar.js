import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="ui search margin-bottom">
      <div className="ui big icon input">
        <input className="prompt" type="text" placeholder="Common names for plants..." />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;