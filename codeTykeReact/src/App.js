import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuestionBody from './components/QuestionBody';
import ProgressBar from './components/ProgressBar';
import './App.scss';

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getQuestion=(questionId)=>{
    setTimeout(() =>{
      fetch("http://localhost:8080/problems/"+questionId).then((res)=>{
        return res.json();
      }).then((data)=>{
        setCurrentQuestion(data);
        setLoading(false);
      })
    },
    1500)
  }

  React.useEffect(()=>{
    getQuestion(1);
  },[]);

  return (
    <div>
      <Navbar />
      <div id="mainWrapper">
        <ProgressBar currentQuestion={currentQuestion}/>
        <QuestionBody currentQuestion={currentQuestion} getQuestion={getQuestion} loading={loading} setLoading={setLoading}/>
      </div>
      <Footer />
    </div>

  );
}

export default App;
