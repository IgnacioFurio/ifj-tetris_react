import React, { useEffect, useState } from 'react';
import './Tetris.css'

export const Tetris = () => {

  const [board, setBoard] = useState([
    ["L","L","L","_","_","_","_","_","_","_"],
    ["L","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
  ]);

  useEffect(() => {
    console.log(board)
  });
  
  return (
    <div className='tetrisDesign'>
      <div className='boardDesign'>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
        <div className='rowDesign'>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
          <div className='colDesign'></div>
        </div>
      </div>
    </div>
  )
}