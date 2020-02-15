import React from 'react';

const QuestionSelection = (props) => {

  const handleCheckbox=(event, currentSelectionIndex)=>{
    let newCheckboxStatus = props.checkboxStatus.map((status, index)=>{
      if(index === currentSelectionIndex){
        return event.target.checked;
      } else {
        return status;
      }
    })
    props.setCheckboxStatus(newCheckboxStatus);
  }
   return(
     <div className="selectionBox">
       <div className="selectionImageContainer">
         <img alt="" src={props.possibleAnswer.image} />
       </div>
       <div className="checkboxText">
         <input checked={ props.checkboxStatus[props.index] ? "checked" : "" } onChange={(event)=>handleCheckbox(event, props.index)} className="checkbox" type="checkbox" />
         <span className="selectionText">{props.possibleAnswer.text}</span>
       </div>
     </div>
   )
}

export default QuestionSelection;
