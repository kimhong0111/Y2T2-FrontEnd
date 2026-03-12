import { useState } from "react";
import { INITIAL_STUFFS } from "../App";


export default function StuffForm({onHandleStuff}) {
  const [name,setName]=useState("")
  const [price,setPrice]=useState(0)

  function handleNameInput(event){
     setName(event.target.value);
  }
  function handlePriceInput(event){
    setPrice(parseInt(event.target.value))
  }

  function handleClick(e){
    e.preventDefault();
    onHandleStuff(name,price)
  }


  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={handleNameInput}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" on onChange={handlePriceInput} />

      <button onClick={handleClick}>Add Stuff</button>
    </form>
  );
}
