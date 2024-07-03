import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const add=()=>{
    if(count<20){
      setCount(count+1)
    }
  }
  const reduce=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  

  return (
    <>
      <div className="main">
        <div className="text">
          Counter
        </div>
        <div className="stext">
          This works from 0-20
        </div>
        <div className="count">
          {count}
        </div>
        <button onClick={add}>Add</button>
        <button onClick={reduce}>Reduce</button>
      </div>
    </>
  )
}

export default App
