import React, { useState } from 'react'

export default function Textform(props) {
    const handleclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleonchange = (event)=>{
        let m = event.target.value
        setText(m)
    }

    
    const [text,setText] = useState("enter text here");
  return (
        <div className="mb-3">
            
            <h1>{props.title}</h1>
            <div className='mb-3'>
            <textarea className="form-control" value = {text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleclick}>
                Convert to upper case
            </button>
        </div>
    
  )
}
