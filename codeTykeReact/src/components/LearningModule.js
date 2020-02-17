import React from 'react';
import QuestionBody from './QuestionBody';
import ProgressBar from './ProgressBar';
import PageLoader from './PageLoader';


const LearningModule = (props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(()=>{
    getQuestion(0);
  },[]);

  const getQuestion=(questionId)=>{
      fetch("http://localhost:8080/problems/"+questionId)
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        setCurrentQuestion(data);
        setLoading(false);
      }).catch((err)=>{
        console.log(err);
      });
  }

  if(currentQuestion.id >= 0){
    var progressBar = <ProgressBar currentQuestion={currentQuestion}/>
    var questionBody = <QuestionBody currentQuestion={currentQuestion} getQuestion={getQuestion} loading={loading} setLoading={setLoading}/>
  } else {
    var pageLoader = <PageLoader />;
  }

  return (
    <div className="learning-module">
      {progressBar}
      {questionBody}
      {pageLoader}
    </div>
  )
}

export default LearningModule;
