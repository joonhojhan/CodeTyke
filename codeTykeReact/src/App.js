import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuestionBody from './components/QuestionBody';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState({});

  const getQuestion=(questionId)=>{
    setTimeout(() =>{
      fetch("http://localhost:8080/problems/"+questionId).then((res)=>{
        return res.json();
      }).then((data)=>{
        setCurrentQuestion(data);
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
        <QuestionBody currentQuestion={currentQuestion} getQuestion={getQuestion}/>
      </div>
      <Footer />
    </div>

  );
}

export default App;
