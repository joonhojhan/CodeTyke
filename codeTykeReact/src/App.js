import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LearningModule from './components/LearningModule';
import './styles/App.scss';

function App() {

  return (
    <div>
      <Navbar />
      <div id="mainWrapper">
         <LearningModule />
      </div>
      <Footer />
    </div>
  );
}

export default App;
