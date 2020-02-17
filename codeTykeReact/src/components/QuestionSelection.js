import React from 'react';

const QuestionSelection = (props) => {

  const handleCheckbox=(event, currentSelectionIndex)=>{
    if(!props.answerSubmitResult.result){
      let newCheckboxStatus = props.checkboxStatus.map((status, index)=>{
        if(index === currentSelectionIndex){
          return status = !status;
        } else {
          return status;
        }
      });
      props.setCheckboxStatus(newCheckboxStatus);
    }
  }

  const setClassName = () => {
    let className = "selectionBox"

    if(props.answerSubmitResult.result === false && props.checkboxStatus[props.index])
      className += " incorrect"
    else if (props.answerSubmitResult.result && props.checkboxStatus[props.index])
      className += " correct"
    else if(props.checkboxStatus[props.index])
      className += " active"


    return className;
  }

  return(
     <div className={ setClassName() } onClick={(event)=>handleCheckbox(event, props.index)}>
       <div className="selectionImageContainer">
         <img alt="" src={props.possibleAnswer.image} />
       </div>
       <div className="checkboxText">
         <input checked={ props.checkboxStatus[props.index] ? "checked" : "" } className="checkbox" type="checkbox" />
         <span className="selectionText">{props.possibleAnswer.text}</span>
       </div>
     </div>
   )
}

export default QuestionSelection;
