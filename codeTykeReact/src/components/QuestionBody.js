import React from 'react';
import QuestionSelection from './QuestionSelection';

const QuestionBody = (props) => {
  const [checkboxStatus, setCheckboxStatus] = React.useState([false, false, false, false]);

  let possibleAnswersElArr = [];
  if(props.currentQuestion.possibleAnswers){
     possibleAnswersElArr = props.currentQuestion.possibleAnswers.map((selection, index)=>{
      return(
          <QuestionSelection key={index} selection={selection} index={index}  checkboxStatus={checkboxStatus}  setCheckboxStatus={setCheckboxStatus} />
      )
    })
  }

  const handleSubmit=(event)=>{
    if(props.currentQuestion.id >= props.currentQuestion.totalQuestions){
      props.getQuestion(1);
    } else {
      props.getQuestion(props.currentQuestion.nextQuestionId);
    }
  }

  return (
    <>
      <div id="questionHeaderContainer">
        <div id="questionHeader">
          {props.currentQuestion.title}
        </div>
        <div id="questionSubHeader">
          {props.currentQuestion.additionalInfo}
        </div>
      </div>
      <div id="outerBox">
        {possibleAnswersElArr}
        <div id="submitButtonContainer">
          <div className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`} onClick={handleSubmit}>Submit</div>
        </div>
      </div>
    </>
  )
}

export default QuestionBody;
