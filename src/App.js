import { useState,useEffect } from 'react';
import './App.css';
function App() {

  const [player, setPlayer] = useState("")
  const [computerss, setComputeres] = useState("")
  const [text, setText] = useState("")
  const [playerScore, setPlayerScore] = useState(0)
  const [compScore, setCompScore] = useState(0)
  const Players = (e) => {
    setPlayer(e.target.className)
      const choices = ["rock", "paper", "scissors"];
    setComputeres(choices[Math.floor(Math.random() * 3)]);
  }

  const Result = () => {
    if (player === "rock" && computerss === "scissors") {
      setText("Win")
      setPlayerScore(playerScore+1)
    } else if (player === "rock" && computerss === "paper") {
      setText("Lose")
      setCompScore(compScore+1)
    } else if (player === "scissors" && computerss === "rock") {
      setText("Lose")
      setCompScore(compScore+1)
    } else if (player === "scissors" && computerss === "paper") {
      setText("Win")
      setPlayerScore(playerScore+1)
    } else if (player === "paper" && computerss === "rock") {
      setText("Win")
      setPlayerScore(playerScore+1)
    } else if (player === "paper" && computerss==="scissors") {
      setText("Lose")
      setCompScore(compScore+1)

    } else {
      setText("Tie")
    }
  }
  useEffect(() => {
    Result();
  }, [computerss]);
  return (
    <div className='container'>
      <div className='topText'>
        <h1>Rock & Paper & Scissors Game</h1>
      </div>
      <div className='btns'>
        <button className="rock" id="rock" onClick={Players}>&#x1F44A;</button>
        <button className="paper" id="paper" onClick={Players}>&#x1f590;</button>
        <button className="scissors" id="scissors" onClick={Players}>&#x270c;</button>
      </div>
      <div className='ties'>
        <h2>{player==="" ? "":text}</h2>
        <h2>{player==="" ? "":`Your choice ${player} & Computer choice ${computerss}`}</h2>
      </div>
      <div className='score'>
        <h2>{`Your Score: ${playerScore}`}</h2>
        <h2>{`Computer Score: ${compScore}`}</h2>
      </div>
    </div>
  );
}

export default App;
