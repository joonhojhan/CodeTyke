import React from 'react';
import ProgressBar from './ProgressBar';

const ProgressBarWrapper = props => {
  const [percentage, setPercentage] = React.useState(0);

  const calcPercentage = () => {
    const totalQuestions = props.currentQuestion.totalQuestions;
    const id = props.currentQuestion.id;
    const currPercentage = id/totalQuestions * 100;
    if (typeof currPercentage === 'number') setPercentage(currPercentage);
  }

  React.useEffect(() => {
    if (props) calcPercentage();
  })

  return (
    <ProgressBar percentage={percentage}/>
  )
}

export default ProgressBarWrapper;
