import React from 'react';

const ProgressBar = (props) => {
  const getStyles = (questionObj) => ({
    borderRadius: questionObj.id === questionObj.totalQuestions ? "20px" : "20px 0px 0px 20px",
    width: Math.ceil((questionObj.id / questionObj.totalQuestions) * 100) + "%"
  });

  const progressBarFill = getStyles(props.currentQuestion);
  return(
    <div className="progressBarContainer">
      <div className="barFill" style={progressBarFill} />
      <div className="barBg">
        <div className="line" />
        <div className="circle" />
      </div>
    </div>
  )
}

export default ProgressBar;
