import React, { useEffect, useState } from 'react';
import './Tetris.css'
import { pieceMovement } from '../../helpers/Tetris';

export const Tetris = () => {

  //cada elemento dentro del array de arrays que representa el tablero es considerado un pixel
  const [board, setBoard] = useState([
    ["LDesign","LDesign","LDesign","_","_","_","_","_","_","_"],
    ["LDesign","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
  ]);

  //aqui guardamos el estilo css de la pieza
  const [piece, setPiece] = useState("");

  //
  const [movement, setMovement] = useState(
    {
      direction: "",
      keyPressed: false
    }
    );
  
  //detectamos la tecla y la guardamos en movement
  addEventListener("keydown", (event) => {setMovement({direction : event.key, keyPressed: true})});  
  
  //cada vez que el tablero cambia lo pintamos de nuevo
  useEffect(() => {
    for(let i = 0 ; i < board.length ; i++){
      for(let j = 0 ; j < board[i].length ; j++){
        if(board[i][j] !== "_"){
          setPiece("colDesign " + board[i][j]);
        }
      };
    };    
    // reseteamos el movimiento
    if(movement.keyPressed){
      setMovement(
        {
          direction: "",
          keyPressed: false
        }
        )
      }
    }, [board]);

  //Cuando hay un cambio en movimiento lanzamos la funcion de mover pieza
  useEffect(() => {
    if(movement.keyPressed === true){
      let data = pieceMovement(movement.direction, board);
      setBoard(data);
    }else {
      setBoard(board)
    };  
  }, [movement]);

  
  return (
    <div className='tetrisDesign'>
      <div className='boardDesign'>
        <div className='rowDesign'>
          {board[0][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[0][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[0][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[0][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[0][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[0][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[0][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[0][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[0][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[0][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
        <div className='rowDesign'>
          {board[1][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[1][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[1][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[1][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[1][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[1][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[1][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[1][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[1][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[1][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
        <div className='rowDesign'>
          {board[2][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[2][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[2][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[2][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[2][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[2][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[2][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[2][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[2][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[2][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
        <div className='rowDesign'>
          {board[3][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[3][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[3][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[3][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[3][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[3][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[3][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[3][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[3][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[3][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
        <div className='rowDesign'>
          {board[4][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[4][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[4][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[4][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[4][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[4][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[4][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[4][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[4][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[4][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
        <div className='rowDesign'>
          {board[5][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[5][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[5][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[5][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[5][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[5][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[5][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[5][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[5][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[5][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
        <div className='rowDesign'>
          {board[6][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[6][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[6][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[6][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[6][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[6][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[6][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[6][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[6][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[6][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
        <div className='rowDesign'>
          {board[7][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[7][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[7][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[7][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[7][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[7][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[7][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[7][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[7][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[7][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
        <div className='rowDesign'>
          {board[8][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[8][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[8][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[8][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[8][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[8][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[8][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[8][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[8][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[8][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
        <div className='rowDesign'>
          {board[9][0] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[9][1] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[9][2] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[9][3] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[9][4] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[9][5] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[9][6] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[9][7] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[9][8] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
          {board[9][9] === "_" ? <div className='colDesign'></div> : <div id='00' className={piece}></div>}
        </div>
      </div>
    </div>
  )
}