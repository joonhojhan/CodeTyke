import React from 'react';

const QuestionSelection = (props) => {

  const [className, setClassName] = React.useState("selectionBox");

  const handleCheckbox=(event, currentSelectionIndex) => {
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

  return(
     <div className={ className } onClick={(event)=>handleCheckbox(event, props.index)}>
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
