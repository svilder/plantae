import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div class="ui search margin-bottom">
      <div class="ui big icon input">
        <input class="prompt" type="text" placeholder="Common names for plants..." />
        <i class="search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;