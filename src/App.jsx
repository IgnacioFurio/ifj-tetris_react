import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Tetris } from './common/Tetris/Tetris'
import { Header } from './common/Header/Header'
import { Footer } from './common/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <Header />
      <Tetris />
      <Footer/>
    </div>
  )
}

export default App
