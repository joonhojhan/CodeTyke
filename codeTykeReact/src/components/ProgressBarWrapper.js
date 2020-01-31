import React from 'react';
import ProgressBar from './ProgressBar';

// export default class ProgressBarWrapper extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       percentage: 0
//     }
//   }

//   componentDidUpdate() {
//     console.log('in hook:', this.props)
//     const totalQuestions = this.props.currentQuestion.totalQuestions;
//     const id = this.props.currentQuestion.id;
//     const currPercentage = id/totalQuestions * 100;
//     this.setState({percentage: currPercentage});
//   }

//   render() {
//     console.log('in render:', this.props)
//     // console.log(this.state.percentage)
//     return <ProgressBar percentage={this.state.percentage}/>
//   }
// }

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
