import React from 'react';

//Controllled component
function InfoSearchKeywords (props) {
  if(!props.show) {
    return null;
  }

  return (
    <div className="background-of-info-search">
      <div className="info-search-struct">
        <div>
          <button onClick={props.onClose} className="close-search-keyword-info">
            Close
          </button>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default InfoSearchKeywords;