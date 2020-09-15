import React from 'react';

class ResultCard extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div onClick={() => this.props.updateSelectedResult(result)} className="column">
        <div className="ui fluid card">
          <div className="content">
            <p className="header">{result.common_name}</p>
          </div>
          <div className="image">
            <img 
              src={result.image_url}
              alt={result.common_name}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default ResultCard;