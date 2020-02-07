import React from 'react';
import QuestionSelection from './QuestionSelection';

const QuestionBody = (props) => {
  const [checkboxStatus, setCheckboxStatus] = React.useState([false, false, false, false]);
  // const [possibleAnswers, setPossibleAnswers] = React.useState([]);

  let possibleAnswersElArr = [];

  if(props.currentQuestion.possibleAnswers){
     possibleAnswersElArr = props.currentQuestion.possibleAnswers.map((selection, index)=>{
      return(
          <QuestionSelection key={index} selection={selection} index={index}  checkboxStatus={checkboxStatus}  setCheckboxStatus={setCheckboxStatus} />
      )
    })
  }

  // React.useEffect(() => {
  //   let possibleAnswersElArr = props.currentQuestion.possibleAnswers.map((selection, index)=>{
  //     return(
  //         <QuestionSelection key={index} selection={selection} index={index}  checkboxStatus={checkboxStatus}  setCheckboxStatus={setCheckboxStatus} />
  //     )
  //   })
  //   setPossibleAnswers(possibleAnswersElArr);
  // }, []);

  const handleSubmit=(event)=>{
    if(props.currentQuestion.id >= props.currentQuestion.totalQuestions){
      props.getQuestion(1);
    } else {
      props.getQuestion(props.currentQuestion.nextQuestionId);
    }
  }

  const loaderImg = <div className="submitLoader" style={{display: props.loading ? "block" : "none"}}><img src='loadingLogo.png' /></div>;

  return (
    <>
      <div id="questionHeaderContainer">
        <div id="questionHeader">{props.currentQuestion.title}</div>
        <div id="questionSubHeader">{props.currentQuestion.additionalInfo}</div>
      </div>
      <div id="outerBox">
        <div id="questionsBox">
          {possibleAnswersElArr}
        </div>
        <div id="submitButtonContainer">
  <div className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`} onClick={handleSubmit}>
    {loaderImg}
     Submit</div>
        </div>
      </div>
    </>
  )
}

export default QuestionBody;
