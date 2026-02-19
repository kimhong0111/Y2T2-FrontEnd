import TOP_PERFORMER from "./data";

function App() {
  return(
   <>
     <h1>Top Performer Of The Year</h1>
    {TOP_PERFORMER.map((tp)=>(
      <TopPerformer TP={tp}/>
    ))}
   
   </>




  )

  
}


function TopPerformer({TP}){
    return (
      <div className="card">
      <img  className="card-img" src={TP.image.src} alt={TP.image.alt}/>
     <h2>Name:{TP.name}</h2>
      <p>Class: {TP.class}</p>
     <p>Hobby: {TP.hobby}</p>
    </div> 
    )
}

export default App;
