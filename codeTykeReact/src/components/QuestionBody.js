import React from 'react';
import QuestionSelection from './QuestionSelection';

const QuestionBody = (props) => {
  const [checkboxStatus, setCheckboxStatus] = React.useState([false, false, false, false]);

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
      <div id="questionHeaderContainer">
        <div id="questionHeader">{props.currentQuestion.title}</div>
        <div id="questionSubHeader">{props.currentQuestion.additionalInfo}</div>
      </div>
      <div id="outerBox">
        <div id="questionsBox">
          {selectionElArr}
        </div>
        <div id="submitButtonContainer">
          <div className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`} onClick={handleSubmit}>Submit</div>
        </div>
      </div>
    </div>
  )
}

export default QuestionBody;
