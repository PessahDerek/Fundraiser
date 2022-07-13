import React from 'react';
import './comp.css';

const style = {
    width: "5em",
    height: "5em",
    borderRadius: "50%",
    border: "2px solid #3F88C5"
}

const Spinner = () => {
  return (
    <div style={style} className='spinner'></div>
  )
}

export default Spinner