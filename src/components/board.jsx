function Square({value,handleClck}) {
  return(
    <button className="square" onClick={handleClck}>{value}</button>
  )
}

export default function Board({squares,onPlay,isXnext}){
  // const [squares,setSquares]=useState(Array(9).fill(null));
  function onSquareclck(i){
    if(squares[i] || winner(squares)){return}
   let newSquares=squares.slice();
   if(isXnext){
     newSquares[i]="x";
     
    }
    else{
     newSquares[i]="o";
    
   }
   onPlay(newSquares);
  }
  const win=winner(squares);
  let status;
  if(win){
    status="Player "+win+" won.";
  }
  else{
    status="Next player : "+(isXnext?"X":"O");
  }
  return(
    <>
    <div className="status">{status}</div>
    <div className="board-row">
    <Square value={squares[0]} handleClck={()=>{onSquareclck(0)}}/> 
    <Square value={squares[1]} handleClck={()=>{onSquareclck(1)}}/> 
    <Square value={squares[2]} handleClck={()=>{onSquareclck(2)}}/> 
    </div>
    <div className="board-row">
    <Square value={squares[3]} handleClck={()=>{onSquareclck(3)}}/> 
    <Square value={squares[4]} handleClck={()=>{onSquareclck(4)}}/> 
    <Square value={squares[5]} handleClck={()=>{onSquareclck(5)}}/> 
    </div>
    <div className="board-row">
    <Square value={squares[6]} handleClck={()=>{onSquareclck(6)}}/> 
    <Square value={squares[7]} handleClck={()=>{onSquareclck(7)}}/> 
    <Square value={squares[8]} handleClck={()=>{onSquareclck(8)}}/> 
    </div>
    </>
  )
}

function winner(squares){
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<lines.length;i++){
    let [a,b,c]=[...lines[i]];
    if(squares[a]&& squares[a]===squares[b] && squares[a]===squares[c]){
      return squares[a];
    }
  }
  return null;
}
