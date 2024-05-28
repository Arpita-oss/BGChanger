import { set } from 'mongoose'
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color,setColor] = useState("green")
  // const bgchanger = ()=>{
  //   setColor(()=>{
  //     backgroundColor= "red"
  //   })
  // }
  return (
    <div >
      <div className="w-[100%] h-[100vh]  flex justify-center items-center" style={{backgroundColor:color}} id="main">
      <button onClick={()=>setColor("red")} className='bg-pink-100 p-4'>Click</button>
      </div>
        
    </div>
  )
}

export default App;