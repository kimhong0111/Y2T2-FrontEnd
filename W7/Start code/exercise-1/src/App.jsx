import React, { use, useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
   const [isRain, setIsRainning]=useState(false);
  function onSunClick() {
      setIsRainning(false);
  
  }

  function onRainClick() {
    setIsRainning(true);


  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
   return (
    
    isRain ? <><h1>RAIN TIME !</h1> </> : <><h1>SUN TIME !</h1> </> 

    );
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return (
      isRain ?  "blue" : "red"
    );

  }

  return (
    <main  style={{backgroundColor : getBackgroundColor()}}>
      <h1>TODO</h1>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button  onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
