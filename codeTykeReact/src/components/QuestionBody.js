import React from 'react';
import QuestionSelection from './QuestionSelection';

const getStyles = (currentQuestion, totalQuestions) => ({
  borderRadius: getBorderRadius(currentQuestion, totalQuestions),
  width: getProgress(currentQuestion, totalQuestions)
});

const getBorderRadius = (currentQuestion, totalQuestions) => {
  return currentQuestion === totalQuestions ? "20px" : "20px 0px 0px 20px";
}
  
const getProgress = (currentQuestion, totalQuestions) => {
  const percentage = Math.ceil((currentQuestion / totalQuestions) * 100);
  return `${percentage}%`;
}

const QuestionBody = (props) => {
  const [checkboxStatus, setCheckboxStatus] = React.useState([false, false, false, false]);
  const divStyle = getStyles(props.currentQuestion.id, props.currentQuestion.totalQuestions);

  let selectionElArr;

  if(props.currentQuestion.possibleAnswers){
     selectionElArr = props.currentQuestion.possibleAnswers.map((selection, index)=>{
      return(
          <QuestionSelection key={index} selection={selection} index={index}  checkboxStatus={checkboxStatus}  setCheckboxStatus={setCheckboxStatus} />
      )
    })
  } else {
    selectionElArr = [];
  }

  const handleSubmit=(event)=>{
    if(props.currentQuestion.id >= props.currentQuestion.totalQuestions){
      props.getQuestion(1);
    } else {
      props.getQuestion(props.currentQuestion.nextQuestionId);
    }
  }
  
  return (
    <div>
      <div className="progressBarContainer">
        <div className="bar" style={divStyle} />
        <div className="barBg">
          <div className="line" />
          <div className="circle" />
        </div>
      </div>
      <div id="questionHeaderContainer">
        <div id="questionHeader">{props.currentQuestion.title}</div>
        <div id="questionSubHeader">{props.currentQuestion.additionalInfo}</div>
      </div>
      <div id="outerBox">
        {selectionElArr}
        <div id="submitButtonContainer">
          <div className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`} onClick={handleSubmit}>Submit</div>
        </div>
      </div>
    </div>
  )
}

export default QuestionBody;