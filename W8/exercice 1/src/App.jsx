import React, { useState } from "react";

export default function App() {
  const [score ,setScore]=useState(0);
  function handleInput(event){

   let result=parseInt(event.target.value);
   
   if(result > 10){
     setScore(0)
     return
   }
   setScore(result)
  }


  console.log(score)

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`
    let scoreColor ="red";

    // 2- Compute color (optional)
    if(score >2 ){
       scoreColor="green";
    }
    if(score > 4){
      scoreColor="blue";
    }
    if(score > 8){
      scoreColor="pink"
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" value={score} min="0" max="10"  onChange={handleInput}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
