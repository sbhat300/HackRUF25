import { useState } from 'react'
import './index.css'
import Menu from './components/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
    </>
  )
}

export default App
