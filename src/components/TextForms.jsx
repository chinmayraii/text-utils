import React, { useState } from 'react'


const TextForms = (props) => {
    let [text,setText]= useState('')

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleUpperCase =()=>{
        setText( text.toUpperCase());
    }

    const handleLowerCase=()=>{
        setText(text.toLowerCase())
    }

    const handleCapitalCase= ()=>{
        setText( text.charAt(0).toUpperCase() + text.slice(1))
    }

    const handleInverseCase= ()=>{
        setText(text.split('').reverse().join(''))
    }

    const handleCopyCase = ()=>{
        let te= document.getElementById('text_area');
        te.select()
        navigator.clipboard.writeText(te.value);
    }

    const handleExtraSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '))
    }
     
    const handleClearCase= ()=>{
        setText('')
    }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' }} id="text_area" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mt-2" onClick={handleUpperCase}>UPPER CASE</button>
        <button className="btn btn-primary mt-2 mx-2 my-1 " onClick={handleLowerCase}>lower case</button>
        <button className="btn btn-primary mt-2 mx-2 my-1" onClick={handleCapitalCase}>Capitalized Case</button>
        <button className="btn btn-primary mt-2 mx-2 my-1" onClick={handleInverseCase}>Inverse Case</button>
        <button className="btn btn-primary  mt-2 mx-2 my-1" onClick={handleCopyCase}>Text Copy</button>
        <button className="btn btn-primary mt-2 mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mt-2 mx-2 my-1" onClick={handleClearCase}>Clear</button>
    </div>

    <div className="container mt-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b></p>
        <p><b>{0.008 *text.split(" ").length } minutes read</b></p>
        <h2 className='mt-3'>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}

export default TextForms
