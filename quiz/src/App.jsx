import React from 'react';
import './App.css';
import HomeComponent from './Component/HomeComponent';
import ResultComponent from './Component/ResultComponent';
import QuizComponent from './Component/QuizComponent';

function App() {
  return (
    <div className="App">
     {/* <ResultComponent/> */}
     <QuizComponent/>
     {/* <HomeComponent/> */}
    </div>
  );
}

export default App;