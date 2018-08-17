import React, { Fragment } from 'react';
import './_components.css';

const Logger = ({logs}) =>  {
  return (
    <div className="logger">
      {Object.keys(logs).map(key => (
        <div className="logger__log">{key + ": " + logs[key]}</div>
      ))}
    </div>
  );
}

export default Logger;
