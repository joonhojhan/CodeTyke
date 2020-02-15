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
      fetch("http://localhost:8080/checkanswer/" + id + "?answers=" + answers)
        .then((res)=>{
          return res.json();
        }).then((data)=>{
          console.log(data);
          props.setLoading(false);
          setAnswerSubmitResult(data);
        }).catch((err)=>{
          props.setLoading(false);
          console.log(err);
        });
    }

    const handleSubmit=(event)=> {
      // checkAnswer(props.currentQuestion.id, checkboxStatus);
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
          <QuestionSelectionArea checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus} possibleAnswers={props.currentQuestion.possibleAnswers} />
          <div id="submitButtonContainer">
            <Button type={ checkboxStatus.some((el)=>el===true)?"":"disabled" } handleSubmit={handleSubmit} loading={props.loading} />
          </div>
        </div>
      </>
    )
}

// className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`}

export default QuestionBody;
