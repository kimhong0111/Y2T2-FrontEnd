export function Statistic({courseResult}){
    let total=0;
    let avg=calAvg(courseResult);
    let min=calMin(courseResult);
    let max=calMax(courseResult);
   
  return (
   <>
    <div className="card">
      <header><h3>AVERAGE</h3></header>
      <p className="score">{avg}</p>
    </div>
   <div className="card">
      <header><h3>MIN</h3></header>
      <p className="score">{min}</p>
    </div>

   <div className="card">
      <header><h3>MAX</h3></header>
      <p className="score" >{max}</p>
    </div>
   </>


  );
}



function calAvg(courseResult){
    let total=0;
    let length=courseResult.length
   courseResult.map((index)=>{
      total+=index.score;
   })

   let avg=total / length;
   let opAvg=avg.toFixed(3);
   return opAvg;
}

function calMin(courseResult){
    let min=courseResult[0].score;

    courseResult.map((index)=>{
        if(min > index.score){
            min=index.score;
        }
    })
        
   return min;
}



function calMax(courseResult){
    let max=courseResult[0].score;

    courseResult.map((index)=>{
        if(max < index.score){
            max=index.score;
        }
    })
        
   return max;
}