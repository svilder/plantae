import React from 'react';

const SelectedItem = () => {
  return (
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img src="https://bs.floristic.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30" />
        </div>
        <div className="content">
          <a className="header">Header</a>
          <div className="meta">
            <span>Description</span>
          </div>
          <div className="description">
            <p></p>
          </div>
          <div className="extra">
            Additional Details
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SelectedItem;