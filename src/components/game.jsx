import { useState } from "react";
import Board from './board';
export default function Game(){
  const [history,setHistory]=useState([Array(9).fill(null)]);
  const [currentMove,setCurrentMove]=useState(0);
  const currentSquares=history[currentMove];
  const isXnext=currentMove%2 ===0;
  function handlePlay(newSquares){
    let nextHistory=[...history.slice(0,currentMove+1),newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  }
  function jumpTo(move){
    setCurrentMove(move);
  }
const moves=history.map((sqr,move)=>{
  let data;
     if(move==0){
      data="Go to the start of the game.";
     }else{
      data="Jump to move #"+move;
     }
     return(
      <li key={move} onClick={()=>{jumpTo(move)}}><button>{data}</button></li>
     )
})
  return(
    <div className="game">
    <div className="game-board">

    <Board squares={currentSquares} onPlay={handlePlay} isXnext={isXnext}/>
    </div>
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
    </div>
  )
}