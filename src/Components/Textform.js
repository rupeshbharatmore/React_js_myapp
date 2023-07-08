import React, { useState } from 'react'

export default function Textform(props) {
    const handleclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handlelowclick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleonchange = (event)=>{
        let m = event.target.value
        setText(m)
    }

    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    
    const [text,setText] = useState("enter text here");
    

  return (
    <>
        <div className="container">
            
            <h1>{props.title}</h1>
            <div className='mb-3'>
            <textarea className="form-control" value = {text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleclick}>
                Convert to upper case
            </button>
            <button className='btn btn-primary mx-1 ' onClick={handlelowclick}>
                Convert to Lower case
           </button>
           <button className='btn btn-primary mx-1 ' onClick={speak}>
                Speech
           </button>
        </div>
        <div className='container'>
            <h2>Your Text Sumary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length*60} seconds reuired to read above content </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
  )
}
