import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let [count, setCount] = useState(0);

 const add=()=>{
   if(count>=20){
    setCount(count)
   }else
    setCount(count+1);
  };
  const remove=()=>{
    if(count==0){
      setCount(count)
    }else
    setCount(count-1);
  };

  return (
   <>
   <h1>Counter :{count}</h1>
   <button 
   onClick={add }>Add value :{count} </button>
   <br />
   <br />
   <button onClick={remove}>remove value :{count}</button>

   </>
  )
}

export default App
