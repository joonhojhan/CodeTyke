import React from 'react';

const QuestionSelection = (props) => {

  const handleCheckbox=(event, currentSelectionIndex)=>{
    let newCheckboxStatus = props.checkboxStatus.map((status, index)=>{
      return status = index === currentSelectionIndex ? !status : status;
    });
    props.setCheckboxStatus(newCheckboxStatus);
  }

  return(
     <div className="selectionBox" onClick={(event)=>handleCheckbox(event, props.index)}>
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
