import React, { useState } from "react";
import { Enity } from "./Entity";
import { Log } from "./Log";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: `${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}
function Game() {
  const [turn, setTurn] = useState(1);
  const [yourHealth, setYourHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [logs, setLogs] = useState([]);
  const [winState, setWinState] = useState(null);
  const [specialClick,setSpecialClick]=useState(false);

  const addLog = (log) => setLogs((prev) => [...prev, log]);

  const monsterAttack = () => {
    const random = getRandomValue(6, 12);
    setYourHealth((prev) => {
      const next = Math.max(prev - random, 0);
      if (next === 0) setWinState("lose");
      return next;
    });
    addLog(createLogAttack(false, random));
  };

  const playerTurn = (playerDamage) => {
    setMonsterHealth((prev) => {
      const next = Math.max(prev - playerDamage, 0);
      if (next === 0) setWinState("win");
      return next;
    });
    addLog(createLogAttack(true, playerDamage));
    setTurn((prev) => prev + 1);
    monsterAttack();
  };

  const handleAttack = () => {
    const random = getRandomValue(5, 12);
    playerTurn(random);
  };

  const handleSpecial = () => {
    if (turn % 3 === 0) {
      const random = getRandomValue(10, 25); // special should hit harder
      playerTurn(random);
      monsterAttack();
    }
  };

  const handleHeal = () => {
    const newHeal = getRandomValue(8, 15);
    setYourHealth((prev) => Math.min(prev + newHeal, 100));
    addLog(createLogHeal(newHeal));
    setTurn((prev) => prev + 1);
    monsterAttack();
  };

  const handleKillYourSelf = () => {
    setYourHealth(0);
    setWinState("lose");
    addLog({ isKillYourself: true, text: "Kill Yourself" });
  };

  const playerBarStyle = () => ({ width: `${Math.max(yourHealth, 0)}%` });
  const monsterBarStyle = () => ({ width: `${Math.max(monsterHealth, 0)}%` });

  if (winState === "win") return <div>You Win! </div>;
  if (winState === "lose") return <div>You Lose! </div>;

  return (
    <div>
      <Enity nameHealth={"Monster Health"} barStyle={monsterBarStyle()} />
      <Enity nameHealth={"Your Health"} barStyle={playerBarStyle()} />
      <section id="controls">
        <button onClick={handleAttack}>ATTACK</button>
        <button onClick={handleSpecial} disabled={turn % 3 !== 0}>SPECIAL !</button>
        <button onClick={handleHeal}>HEAL</button>
        <button onClick={handleKillYourSelf}>KILL YOURSELF</button>
      </section>
      <section id="log" className="container">
        <h2>Battle log</h2>
        {logs.map((element, i) => (
          <Log key={i} Log={element} />
        ))}
      </section>
    </div>
  );
}

export default Game;