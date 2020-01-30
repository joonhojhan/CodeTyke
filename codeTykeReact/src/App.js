import React from 'react';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState({});
  const [checkboxStatus, setCheckboxStatus] = React.useState([false, false, false, false]);

  const getQuestion=(questionId)=>{
    fetch("http://localhost:8080/problems/"+questionId).then((res)=>{
      return res.json();
    }).then((data)=>{
      setCurrentQuestion(data);
    })
  }

  React.useEffect(()=>{
    getQuestion(1);
  },[]);

  const handleSubmit=(event)=>{
    if(currentQuestion.id >= currentQuestion.totalQuestions){
      getQuestion(1);
    } else {
      getQuestion(currentQuestion.nextQuestionId);
    }
  }

  const handleCheckbox=(event, currentSelectionIndex)=>{
    let newCheckboxStatus = checkboxStatus.map((status, index)=>{
      if(index === currentSelectionIndex){
        return event.target.checked;
      } else {
        return status;
      }
    })
    setCheckboxStatus(newCheckboxStatus);
  }

  let selectionElArr;

  if(currentQuestion.possibleAnswers){
     selectionElArr = currentQuestion.possibleAnswers.map((selection, index)=>{
      return(
        <div key={index} className="selectionBoxes">
          <div className="selectionImageContainer">
            <img alt="" src={selection.image} />
          </div>
            <div className="checkboxText">
              <input onChange={(event)=>handleCheckbox(event, index)} className="checkbox" type="checkbox" />
              <span className="selectionText">{selection.text}</span>
            </div>
        </div>
      )
    })
  } else {
    selectionElArr = [];
  }
  
  var d = new Date();
  var n = d.getFullYear();

  return (
    <div id="mainWrapper">
      <div id="headerBGColor"></div>
      <div id="navbarContainer">
        <img alt="logo" src="assets/logo.png" />
      </div>
      <div id="questionHeaderContainer">
        <div id="questionHeader">{currentQuestion.title}</div>
        <div id="questionSubHeader">{currentQuestion.additionalInfo}</div>
      </div>
      <div id="outerBox">
        {selectionElArr}
        <div id="submitButtonContainer">
          <div className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`} onClick={handleSubmit}>Submit</div>
        </div>
      </div>
      <div id="footerContainer">
          <small id="copyright">Codetyke {n}</small>
          <small id="reserved">All rights reserved</small>
          <small id="footerSlogan">We know you're ready to start coding</small>
      </div>
      <div id="footerBGColor"></div>
    </div>
  );
}

export default App;
