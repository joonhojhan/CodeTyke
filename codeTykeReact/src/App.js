import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LearningModule from './components/LearningModule';
import './styles/App.scss';

function App() {

  var learningModule = <LearningModule />

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
