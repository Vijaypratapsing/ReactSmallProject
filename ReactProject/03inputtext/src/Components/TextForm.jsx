import React, { useState }from "react";

function TextFor(pro) {
  const toupper=()=>{
    let uptext=text.toUpperCase();
    settext(uptext);
  }
  const [text, settext] = useState("enter")
  return (
    <>
        <h1>{pro.head}</h1>
        <div >
            <textarea  value={text}
             onChange={(e)=>settext(e.target.value)} 
             rows="8"></textarea>
        </div>
        <button  onClick={toupper}>touppertext</button>
      
    </>
  )
}

export default TextFor
