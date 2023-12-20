import React, { useEffect, useState } from 'react';
import './Tetris.css'

import { pieceMovement, pieceFinder, injectPiece, pieceSelector } from '../../helpers/Tetris';
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
    if(insertPiece){setInsertPiece(false)};
    if(direction !== ""){setDirection("")};

  }, [board]);

  //setting de piedeDesign when a new one comes to the board
  useEffect(() => {
    if(insertPiece){
      let pieceStyle = pieceFinder(board);
      setPieceDesign("colDesign " + pieceStyle);
    };
    
  }, [insertPiece]);

   // reset the Board and rotationState
  useEffect(() => {
    if(direction !== ""){
      let newData = pieceMovement(direction, board, rotationState);

      setBoard(newData.newBoard);
      setRotationState(newData.rotationState);
    };
  }, [direction]);

  // event to locate the key pressed and set a new piece
  useEffect(() => {
    if(insertPiece){
      let newPiece = [];
      let newBoard = [];
      
      newPiece.push(pieceSelector());

      newBoard = injectPiece(board, newPiece[0]);
      setBoard(newBoard);
    }
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