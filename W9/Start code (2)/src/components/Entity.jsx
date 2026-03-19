
export function Enity({nameHealth , barStyle}){

    return (
        <>
    <section className="container">
      <h2>{nameHealth}</h2>
      <div className="healthbar">
        <div className="healthbar__value" style={barStyle}></div>
      </div>
    </section>        
    </>
    )

}