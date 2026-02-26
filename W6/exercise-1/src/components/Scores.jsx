import { Statistic } from "./Statistic";
export function Scores({courseName,courseResult}){
  return( 
    <>
      <h1>{courseName}</h1>
       {courseResult.map((res)=>(
                    <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{res.firstName}</td>
                <td>{res.lastName}</td>
                <IsBelow50 score={res.score} />
                
              </tr>
            </tbody>
          </table>
       ))}
       <div className="Stat">
        <Statistic courseResult={courseResult} />
       </div>
          


    
    </>
  );
}




function IsBelow50({score}){
    if(score <50){
        return (
            <>
            <td className="warning">{score}</td>
            </>
        )
    }

    return (
     <div>
       <td>{score}</td>
     </div>

    )


    
}