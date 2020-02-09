import React from 'react';
import QuestionSelectionArea from './QuestionSelectionArea';
import Button from './Button';


const QuestionBody = (props) => {

  if(props.currentQuestion.id){

    const handleSubmit=(event)=>{
      props.setLoading(true);
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
          <QuestionSelectionArea possibleAnswers={props.currentQuestion.possibleAnswers} />
          <div id="submitButtonContainer">
            <Button handleSubmit={handleSubmit} loading={props.loading} />
          </div>
        </div>
      </>
    )
  }

  return (<div class="loader-4"><span></span></div>)
}

// className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`}

export default QuestionBody;
