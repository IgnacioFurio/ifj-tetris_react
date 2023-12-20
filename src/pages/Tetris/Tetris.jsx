import React, { useEffect, useState } from 'react';
import './Tetris.css'

import { pieceMovement, pieceFinder, injectPiece, pieceSelector, newPiece } from '../../helpers/Tetris';
import { tetrisPieces } from '../../helpers/TetrisPieces';

import { Board } from '../../common/Board/Board';

export const Tetris = () => {
  //every element is treated like a big pixel
  const [board, setBoard] = useState([
      ["_","_","_","_","_","_","_","_","_"],
      ["_","_","_","_","_","_","_","_","_"],
      ["_","_","_","_","_","_","_","_","_"],
      ["_","_","_","_","_","_","_","_","_"],
      ["_","_","_","_","_","_","_","_","_"],
      ["_","_","_","_","_","_","_","_","_"],
      ["_","_","_","_","_","_","_","_","_"],
      ["_","_","_","_","_","_","_","_","_"],
      ["_","_","_","_","_","_","_","_","_"],
      ["_","_","_","_","_","_","_","_","_"],
    ]);

  //HOOKS
  const [insertPiece, setInsertPiece] = useState(true);
  const [pieceDesign, setPieceDesign] = useState("");
  const [direction, setDirection] = useState("");
  const [rotationState, setRotationState] = useState(0);

  //painting board when board changes
  useEffect(() => {
    if(direction !== ""){setDirection("")};
  }, [board]);

  //trigger to stop newPiece setter
  useEffect(() => {
    if(insertPiece && pieceDesign !== ""){setInsertPiece(false)};
  }, [pieceDesign]);

   // reset the Board and rotationState to allow hte player to repeat the action
  useEffect(() => {
    if(direction !== ""){
      let newData = pieceMovement(direction, board, rotationState);

      setBoard(newData.newBoard);
      setRotationState(newData.rotationState);
    };
  }, [direction]);

  // new piece setter 
  useEffect(() => {
    let data;
    if(insertPiece && pieceDesign === ""){
      data = newPiece(board);
      setBoard(data.newBoard);
      setPieceDesign("colDesign " + data.pieceStyle)
    }
  }, [insertPiece]);

  //addEventListener for the keydown
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });

  // setDirection using they key pressed
  const detectKeyDown = (e) => {
    setDirection(e.key);
  };
    
  return (
    <Board board={board} piece={pieceDesign} onKeydown={(e) => detectKeyDown(e)}/>
  );
};