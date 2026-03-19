export function Log({Log}){
    return (
     <div>
        { Log.isPlayer && Log.isDamage&&
        <div>
        <li>
          <span>Player</span>
          <span> attacked <span className="log--damage">{Log.text}</span></span>
        </li>
         </div>
     
    }
      { Log.isPlayer && !Log.isDamage&&
        <div>
        <li>
          <span>Player</span>
          <span>  heal <span className="log--damage">{Log.text}</span></span>
        </li>
         </div>
     
    }

        { !Log.isPlayer && Log.isDamage&&
        <div>
        <li>
          <span>Monster</span>
          <span> attacked <span className="log--damage">{Log.text}</span></span>
        </li>
         </div>
        }
         { Log.isKillYourself&&
        <div>
        <li>
          <span>You</span>
          <span> attacked <span className="log--damage">{Log.text}</span></span>
        </li>
         </div>
        }
     </div>
    )
}