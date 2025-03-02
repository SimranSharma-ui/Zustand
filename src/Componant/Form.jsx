import React, { useState } from 'react'
import useStore from '../Store/useStore'

const Form = () => {
   const {count,items,increament,decreament ,additems ,removeitems}= useStore()
  const [input,setInput] = useState("");

  const HandleInputChange = (e)=>{
     setInput(e.target.value);
  }
   const Additems = ()=>{
        additems(input) ; 
        setInput("");
   }

  return (
    <div>
      <h1>{count}</h1>
     <input placeholder='write something' value={input} onChange={HandleInputChange}/>
     <h1>{items}</h1>
      <button onClick={Additems}>Add Items</button>
      <button onClick={()=>removeitems()}>Remove Items</button>
      <button onClick={()=>increament()}>Increase</button>
      <button onClick={()=>decreament()}>Decrease</button>
    </div>
  )
}

export default Form
