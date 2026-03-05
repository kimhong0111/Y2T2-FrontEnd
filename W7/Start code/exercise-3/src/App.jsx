import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [valueA , setValueA]=useState(0);
  const [valueB , setValueB]=useState(0);
  const [result , setResult]=useState(0);
  const [isRed , setIsRed]=useState(false);
  function handleInputA(e){
    setValueA(parseInt(e.target.value))
  }

  function handleInputB(e){
    setValueB(parseInt(e.target.value))
  }

  /* You will need some function to handle the key pressed and button events */
  function handleClick(){
    if(isNaN(valueA) || isNaN(valueB)){
       setResult("A and B should be a number")
       setIsRed(true);
    }else {

    setResult(valueA+valueB)
    setIsRed(false)

    }
  }

  function changeToRed(){

     return isRed ? "red" : "white ";
  }
  



  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" onChange={handleInputA} />

      <label>B =</label>
      <input type="text" onChange={handleInputB}  />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result}  style={{color:changeToRed()}}/>
      <button  onClick={handleClick}>Compute</button>
    </main>
  );
}

export default App;
