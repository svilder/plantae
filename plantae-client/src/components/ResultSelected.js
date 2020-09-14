import React from 'react';

class SelectedItem extends React.Component {
  render() {
    const { result } = this.props;
    console.log(result);
    //const synonyms = this.props.result.synonyms;
    return (
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img 
              src={result.image_url}
              alt={result.common_name}
            />
          </div>
          <div className="content">
            <a className="header" href="/">{result.scientific_name}</a>
            <div className="meta">
              <span>Also known as {result.common_name}</span>
            </div>
            <div className="description">
              <p>Of the family of the {result.family}, also known as {result.family_common_name}</p>
            </div>
            <div className="extra">
              synonyms : {result.synonyms}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SelectedItem;