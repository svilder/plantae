import React from 'react';

const SelectedItem = () => {
  return (
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img 
            src="https://bs.floristic.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30"
            alt="plant"
          />
        </div>
        <div className="content">
          <a className="header" href="/">Scientific name</a>
          <div className="meta">
            <span>Also known as Common name</span>
          </div>
          <div className="description">
            <p>Of the family of the Family, also known as Family common name</p>
          </div>
          <div className="extra">
            synonyms : 
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SelectedItem;