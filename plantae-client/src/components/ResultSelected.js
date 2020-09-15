import React from 'react';

class ResultSelected extends React.Component {
  render() {
    const { selectedResult } = this.props;
    console.log(selectedResult);
    // const synonyms = this.props.selectedResult.synonyms;
    if(selectedResult === null) {
      return null;
    } else {
      return (
        <div className="ui items">
          <div className="item">
            <div className="image">
              <img 
                src={selectedResult.image_url}
                alt={selectedResult.common_name}
              />
            </div>
            <div className="content">
              <a className="header" href="/">{selectedResult.scientific_name}</a>
              <div className="meta">
                <span>Généralement appellé (en anglais) : {selectedResult.common_name}</span>
              </div>
              <div className="description">
                <p>De la famille des {selectedResult.family}, soit la famille des {selectedResult.family_common_name} (en anglais)</p>
              </div>
              <div className="extra">
                Synonymes : {selectedResult.synonyms}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ResultSelected;