import React, { useState } from 'react';
export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick=(event)=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UPPER case","success");
  }
  const handleLowClick=(event)=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case","success");
  }
  const handleClearClick=(event)=>{
    let newtext='';
    setText(newtext);
    props.showAlert("Text cleared","success");
  }
  const handleSpace=(event)=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces cleared","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");
  }
  return (
    <>
    <div>
      <h3 style={{color: props.mode===' disabled={text.length===0}light'?'black':'white'}}>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" placeholder={text} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
      </div>
      <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
      <button disabled={text.length===0} onClick={handleLowClick} className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>
      <button disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary mx-1 my-1">Clear text</button>
      <button disabled={text.length===0} onClick={handleSpace} className="btn btn-primary mx-1 my-1">Remove extra spaces</button>
      <button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
    </div>
    <div className="container my-5">
      <h3 style={{color: props.mode==='light'?'black':'white'}}>Your text summary</h3>
      <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
    </>
  );
}
