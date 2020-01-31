import React from 'react';
import ProgressBarFiller from './ProgressBarFiller';
import ProgressBarFillerMax from './ProgressBarFillerMax';

const ProgressBar = (props) => {
  const dot = props.percentage === 100 ? <div /> : <div className="progressBarDot" />;
  const bar = props.percentage === 100 ? <ProgressBarFillerMax percentage={props.percentage}/> : <ProgressBarFiller percentage={props.percentage}/>
  return (
    <div id="progressBar">
      {bar}
      <div id="progressBarLine" style={{width: `${100-props.percentage}%`}}/>
      {dot}
    </div>
  )
}

export default ProgressBar;
