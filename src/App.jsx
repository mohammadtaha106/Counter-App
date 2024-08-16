import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("grey")

  return (
    <>
  

    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >

<div className='flex text-center justify-center items-center flex-col'>

<h1 className='text-3xl font-noticia font-bold mb-4 mt-6'>Access buttons to set counter value</h1>
<h2 className='text-2xl font-semibold'>Count : {count}</h2>
<div className='flex gap-3 text-lg text-white mt-3'>
<button className='p-3 rounded-md font-sans' style={{background : 'black'}} onClick={()=> setCount(count + 1)}>Increment</button> 

<button className='p-3 rounded-md font-sans' style={{background : 'black'}} onClick={()=> setCount(count - 1)} disabled = {count === 0} 
  
  >Decrement</button> 

<button className='p-3  rounded-md font-sans' style={{background : 'black'}} onClick={()=> setCount(0)}  disabled = {count === 0} >Reset</button> 

</div>

<div className='flex gap-3 text-lg text-white mt-3'>
<button className='p-3 px-6 rounded-md font-sans' style={{background : 'black'}} onClick={()=> setCount(count * 5)}>5x</button> 

<button className='p-3 rounded-md font-sans' style={{background : 'black'}} onClick={()=> setCount(count / 5)} 
  
  >÷ by 5</button> 

<button className='p-3 px-4 rounded-md font-sans' style={{background : 'black'}} onClick={()=> setCount(count +100)}   >+100</button> 
</div>
    </div>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black text-white px-3 py-2 rounded-3xl">
          
          <div>
            <div> <h2 className='text-xl font-medium'>Color changer tab </h2></div>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'><button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button   onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg '   style={{backgroundColor: "grey"}}> grey</button>
          
          <button   onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg '   style={{backgroundColor: "purple"}}> purple</button>

          <button   onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg '   style={{backgroundColor: "yellow"}}> yellow</button>
          </div>
          
          </div>
          
         
        </div>
      </div>
    </div>

    </> 
  )
}





export default App
