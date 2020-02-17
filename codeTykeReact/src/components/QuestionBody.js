import React from 'react';
import QuestionSelectionArea from './QuestionSelectionArea';
import Button from './Button';
import Modal from './Modal';


const QuestionBody = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [answerSubmitResult, setAnswerSubmitResult] = React.useState({});
  const [checkboxStatus, setCheckboxStatus] = React.useState([false, false, false, false]);

    const checkAnswer=(id, answers)=>{

      answers = answers.join(",");
      setTimeout(
        function(){
      fetch("http://localhost:8080/checkanswer/" + id + "?answers=" + answers)
        .then((res)=>{
          return res.json();
        }).then((data)=>{
          props.setLoading(false);
          setAnswerSubmitResult(data);
          if(!data.result)
            setTimeout(function(){
               setAnswerSubmitResult({})
               setCheckboxStatus([false, false, false, false])
            }, 1000)
        }).catch((err)=>{
          props.setLoading(false);
          console.log(err);
        })}, 100000)
    }

    const handleSubmit=(event)=> {

      if(event.target.className.includes("disabled")){
        console.log("Hey Disabled");
      } else if (answerSubmitResult.result){
        //next page
        setAnswerSubmitResult({});
        setCheckboxStatus([false, false, false, false]);
        props.setLoading(true);
        props.getQuestion(props.currentQuestion.nextQuestionId);
      } else {
        //check answer
        props.setLoading(true);
        checkAnswer(props.currentQuestion.id, checkboxStatus);
      }
    }

    const showAdditionalInfo = () => {
      setShowModal(!showModal);
    }

    const setButtonType = () => {
      let type = "disabled";

      if(answerSubmitResult.result === false)
        type= "incorrect"
      else if(answerSubmitResult.result)
        type= "affirmative";
      else if(checkboxStatus.some((el)=>el===true))
        type = ""

      return type;
    }

    return (
      <>
        <div id="questionHeaderContainer">
          <div className="overlay"  onClick={showAdditionalInfo} style={{display: showModal ? "block" : "none"}}></div>
          <Modal showModal={showModal} setShowModal={setShowModal} content={props.currentQuestion.additionalInfo} />
          <div id="questionHeader">
            <div className="title">
              {props.currentQuestion.title}
            </div>
            <span className="icon icon-info" onClick={showAdditionalInfo}></span>
          </div>

          <div id="questionSubHeader">
            {props.currentQuestion.additionalInfo}
          </div>
        </div>
        <div id="outerBox">
          <QuestionSelectionArea answerSubmitResult={answerSubmitResult} checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus} possibleAnswers={props.currentQuestion.possibleAnswers} />
          <div id="submitButtonContainer">
            <Button label={answerSubmitResult.result ? "Next" : "Submit"} type={ setButtonType() } handleSubmit={handleSubmit} loading={props.loading} />
          </div>
        </div>
      </>
    )
}

export default QuestionBody;
