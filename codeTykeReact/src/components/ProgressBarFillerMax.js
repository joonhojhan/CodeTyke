import React from 'react';

const ProgressBarFillerMax = (props) => {
  return (
    <div id="progressBarFiller" style={{width: `${props.percentage}%`, borderRadius: 20}}/>
  )
}

export default ProgressBarFillerMax;
