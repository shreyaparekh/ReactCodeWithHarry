
import React, { useState } from 'react';
export default function TextForm(props) {
    const handleClick = ()=>{
        console.log("hi shreya how are yoyr");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase","success");
      }
      const handleChange = (event)=>{
        console.log("change");
        setText(event.target.value);
      }

      const handleCopy = ()=>{  
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        alert("Text copied to clipboard!");
      }
  const handleClear = ()=>{
let newText='';
setText(newText);
props.showAlert("Tewxt clear","success");

  }
    
    // text ni defule value  Enter Text Here an d if we want to update use serText
const [text, setText] = useState("Enter Text Here");
// text="das";//wrong way to change text
// setText("New");  //Coreect
  return (
    <>
<div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-1 my-1"  disabled ={text.length===0} onClick={handleClick}>Cretae UpperCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>

    </div>
  <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>toyr work</h1>
    <p>{text.split("/\s+/").filter((elemnet)=>{return elemnet.length!=0}).length} wordas and length {text.length}character</p>
    <p>{text.length} word length:{text.split(" ").length} character</p>
    <p>{0.008*text.split(" ").length}Minutes</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"enter something text to preview"}</p>
  </div>
  </>
  )
  }
