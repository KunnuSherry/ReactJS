import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen flex justify-center items-end duration-700' style={{ backgroundColor: color }}>
      <div className="main absolute bg-black gap-8 px-4 py-2 h-20 border-2 border-white rounded-full bottom-12 flex justify-center items-center">
        <button onClick={()=>setColor('red')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-white text-center border-2 border-white rounded-full' style={{ backgroundColor: "red" }}>Red</button>
        <button onClick={()=>setColor('green')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-white text-center border-2 border-white rounded-full' style={{ backgroundColor: "green" }}>Green</button>
        <button onClick={()=>setColor('blue')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-white text-center border-2 border-white rounded-full' style={{ backgroundColor: "blue" }}>blue</button>
        <button onClick={()=>setColor('olive')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-white text-center border-2 border-white rounded-full' style={{ backgroundColor: "olive" }}>olive</button>
        <button onClick={()=>setColor('grey')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-white text-center border-2 border-white rounded-full' style={{ backgroundColor: "grey" }}>grey</button>
        <button onClick={()=>setColor('yellow')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-black text-center border-2 border-white rounded-full' style={{ backgroundColor: "yellow" }}>yellow</button>
        <button onClick={()=>setColor('pink')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-black text-center border-2 border-white rounded-full' style={{ backgroundColor: "pink" }}>pink</button>
        <button onClick={()=>setColor('purple')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-white text-center border-2 border-white rounded-full' style={{ backgroundColor: "purple" }}>purple</button>
        <button onClick={()=>setColor('lavender')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-black text-center border-2 border-white rounded-full' style={{ backgroundColor: "lavender" }}>lavender</button>
        <button onClick={()=>setColor('white')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-black text-center border-2 border-white rounded-full' style={{ backgroundColor: "white" }}>white</button>
        <button onClick={()=>setColor('black')} className='shadow-md shadow-white text-2xl font-bold px-3 py-1 text-white text-center border-2 border-white rounded-full' style={{ backgroundColor: "black" }}>black</button>

      </div>
    </div>
  )
}

export default App
