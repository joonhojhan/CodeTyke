import React from 'react';
import QuestionSelection from './QuestionSelection';

const QuestionSelectionArea = (props) => {

  var firstTwoAnswers = [],
      secondTwoAnswers = [];

   props.possibleAnswers.map((possibleAnswer, index)=>{
     if(index < 2){
       firstTwoAnswers.push(<QuestionSelection key={index} possibleAnswer={possibleAnswer} index={index}  {...props} />)
     } else {
       secondTwoAnswers.push(<QuestionSelection key={index} possibleAnswer={possibleAnswer} index={index}  {...props} />)
     }
   })

    return(
      <div id="questionsBox">
        <div className="flex-space-evenly">
          <div className="flex-row">
            {firstTwoAnswers}
          </div>
          <div className="flex-row">
            {secondTwoAnswers}
          </div>
        </div>
      </div>
    )
}

export default QuestionSelectionArea;
