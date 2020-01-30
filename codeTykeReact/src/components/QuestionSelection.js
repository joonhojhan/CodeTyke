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
         <img alt="" src={props.selection.image} />
       </div>
       <div className="checkboxText">
         <input onChange={(event)=>handleCheckbox(event, props.index)} className="checkbox" type="checkbox" />
         <span className="selectionText">{props.selection.text}</span>
       </div>
     </div>
   )
}


export default QuestionSelection;
