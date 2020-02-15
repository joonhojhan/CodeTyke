import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LearningModule from './components/LearningModule';
import './App.scss';
// import './icons/style.css';


function App() {

  //TODO: LearningModule should take props.id to kick off api call

  // if(learningModule.id){
    var learningModule = <LearningModule />
  // } else {
    // var pageLoader = <PageLoader />;
  // }

  return (
    <div>
      <Navbar />
      <div id="mainWrapper">
        {learningModule}
      </div>
      <Footer />
    </div>
  );
}

export default App;
