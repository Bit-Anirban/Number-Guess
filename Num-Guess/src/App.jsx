import { useState } from 'react'

import Game from './component/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Game />
    </>
  )
}

export default App
