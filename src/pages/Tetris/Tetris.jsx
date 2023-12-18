import React, { useEffect, useState } from 'react';
import './Tetris.css'
import { pieceMovement, printBoard } from '../../helpers/Tetris';
import { Board } from '../../common/Board/Board';

export const Tetris = () => {
  //every element is treated like a big pixel
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

  //HOOKS
  const [piece, setPiece] = useState("");
  const [direction, setDirection] = useState("");
  const [rotationState, setRotationState] = useState(0);

  //painting board when board changes
  useEffect(() => {
    let printPiece = printBoard(board);
    setPiece("colDesign " + printPiece);
    if(direction !== ""){setDirection("")};
  }, [board]);

   // reset the Board and rotationState
  useEffect(() => {
    if(direction !== ""){
      let newData = pieceMovement(direction, board, rotationState)
      setBoard(newData.newBoard)
      setRotationState(newData.rotationState)
    };
  }, [direction]);

  // event to locate the key pressed
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  // setDirection using they key pressed
  const detectKeyDown = (e) => {
    setDirection(e.key)
  };
  
  return (
    <Board board={board} piece={piece} onKeydown={(e) => detectKeyDown(e)}/>
  )
}