import React, {useState} from 'react';

function App() {
  let [count,setCount]=useState(5)
  let increment=()=>{
    setCount(count+1)
  }
  let decrement=()=>{
    setCount(count-1)
  }
  let reset = ()=>{
    setCount(0)
  }
  return (
    <div className="App bg-yellow-300 flex flex-col justify-center gap-20 items-center h-screen">
      <h1 className='text-4xl font-serif text-red-700'>
        Counter App
      </h1>
      <div className='text-3xl sm:text-5xl lg:text-9xl font-bold'> {count}</div>
    
    <div className='flex flex-row justify-items-center items-center gap-4 sm:gap-6 lg:gap-32'>
    <div  className='font-mono'>
      <button  className=' border-black border-2 text:xl sm:text-2xl md:text-3xl font-semibold items-center px-2 hover:bg-blue-800  bg-blue-600 rounded-sm' onClick={increment}>
        Increment
      </button>
    </div>
    <div className=' font-mono'>
     
      
      <button className=' border-black border-2 text:xl sm:text-2xl md:text-3xl font-semibold align-middle w-40 items-center  hover:bg-blue-800 bg-blue-600 rounded-sm' onClick={decrement}>
      Decrement
      </button>
    </div>
    <div className=' font-mono' >
      <button className=' border-black border-2 text:xl sm:text-2xl md:text-3xl font-semibold items-center px-2 hover:bg-blue-800 bg-blue-600 rounded-sm' onClick={reset}>
        Reset
      </button>
    </div>
    </div>
   
    
    </div>
  );
}

export default App;
