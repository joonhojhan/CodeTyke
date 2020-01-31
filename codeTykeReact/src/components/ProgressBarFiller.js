import React from 'react';

const ProgressBarFiller = (props) => {
  return (
    <div id="progressBarFiller" style={{width: `${props.percentage}%`}}/>
  )
}

export default ProgressBarFiller;
