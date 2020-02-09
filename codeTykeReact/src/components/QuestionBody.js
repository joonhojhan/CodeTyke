import React from 'react';
import QuestionSelectionArea from './QuestionSelectionArea';
import Button from './Button';
import Modal from './Modal';


const QuestionBody = (props) => {

  const [showModal, setShowModal] = React.useState(false);

    const handleSubmit=(event)=> {

      // if button inactive prompt to select answer

      // else check for correct answer
        //handle incorrect

        // handle correct

      props.setLoading(true);
      if(props.currentQuestion.id >= props.currentQuestion.totalQuestions){
        props.getQuestion(1);
      } else {
        props.getQuestion(props.currentQuestion.nextQuestionId);
      }
    }

    const showAdditionalInfo = () => {
      setShowModal(true);
    }

    return (
      <>
        <div id="questionHeaderContainer">
          <Modal showModal={showModal} setShowModal={setShowModal} content={props.currentQuestion.additionalInfo} />
          <div id="questionHeader">
            <div class="title">
              {props.currentQuestion.title}
            </div>
            <span class="icon icon-info" onClick={showAdditionalInfo}></span>
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

// className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`}

export default QuestionBody;
