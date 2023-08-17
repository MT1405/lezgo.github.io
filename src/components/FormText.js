import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleUpLower = ()=>{
    
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleOnChange = (event)=>{
        console.log("Changes made")
        setText(event.target.value)
        
    }
    const ClearText = ()=>{
    
        let newText =  '';
        setText(newText)
        props.showAlert("Cleared Text","success")
    }
    const Copy = ()=>{
    
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to device clipboard","success")
        
    }
    const [text,setText]=useState('');
  return (
<div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
<h1 >{props.heading}</h1>
<div className ="my-5">
<textarea class="form-control " id="mybox" value={text} onChange={handleOnChange} rows="14" style={{backgroundColor:props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-4" onClick={handleUpLower}>Convert to lowerCase</button>
<button className="btn btn-primary mx-4" onClick={ClearText}>Clear Text</button>
<button className="btn btn-primary mx-4" onClick={Copy}>Copy Text</button>
<div className='container my-3'style={{color:props.mode === 'dark'?'white':'black'}}>
    <h1>Your text :</h1>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length}Minutes to read</p>
    <h2>Your Text Preview :</h2>
    <p>{text.length>0?text:"Enter something in the above box"}</p>
</div>
</div>

  )
}
