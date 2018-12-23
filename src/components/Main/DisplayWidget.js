import React from 'react';

const DisplayWidget = props => {

  for (let key in props.info) {
    console.log(key);
  }

  return (
    <div className="col-6 widget">
      <h2>{ props.title }</h2>
    {
      props.info 
        ?
          Object.keys(props.info).map( (keyName) => 
            <p className="widget_row">
              <span className="widget_col-label" >{keyName}:</span>
              <span className="widget_col-value">{props.info[keyName]}</span>
            </p>)
        :
          <p>Loading...</p>
     }

    </div>)};

export default DisplayWidget;