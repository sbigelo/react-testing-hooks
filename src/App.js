import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  return <div>
    {counter} 
    <button onClick={increment}>Increment</button>
  </div>
}

export default App