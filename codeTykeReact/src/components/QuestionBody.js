import React from 'react';
import QuestionSelectionArea from './QuestionSelectionArea';
import Button from './Button';
import Modal from './Modal';


const QuestionBody = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [answerSubmitResult, setAnswerSubmitResult] = React.useState({});
  const [checkboxStatus, setCheckboxStatus] = React.useState([false, false, false, false]);
  const [buttonType, setButtonType] = React.useState("disabled";

    const checkAnswer=(id, answers)=>{

      answers = answers.join(",");

      fetch("http://localhost:8080/checkanswer/" + id + "?answers=" + answers)
        .then((res)=>{
          return res.json();
        }).then((data)=>{
          props.setLoading(false);
        }).catch((err)=>{
          props.setLoading(false);
          console.log(err);
        })
    }

    const handleSubmit=(event)=> {

        // on disabled

        // on next page

        //on enabled

    }

    const showAdditionalInfo = () => {
      setShowModal(!showModal);
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
            <Button label={"Submit"} type={ setButtonType() } handleSubmit={handleSubmit} loading={props.loading} />
          </div>
        </div>
      </>
    )
}

export default QuestionBody;
