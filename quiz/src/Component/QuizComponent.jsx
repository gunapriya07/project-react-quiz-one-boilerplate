import React from "react";
import "./QUizComponent.css";

export default class QuizComponent extends React.Component{
    constructor(){
        super();
    
}
render(){
    return(
        <>
        <div className="main">
           <h1 className="Question">Question</h1>
           <p className="no">1 of 15</p>
           <h3 className="para1">Which is the only mammal that can jump?</h3>
           <div className="options">
            <button>Dog</button>
            <button>Elephant</button>
            </div>
            <div className="options">
            <button>Goat</button>
            <button>Lion</button>
           </div>
           <div className="footer">
            <button style={{ backgroundColor: 'rgb(17, 160, 216)' }}>Previous</button>
            <button style={{ backgroundColor: 'green' }}>Next</button>
            <button style={{ backgroundColor: 'red' }}>Quiz</button>
           </div>
        </div>
        </>
    )
}
}