import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('String converted to Upper case','success');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }
    const handleDnClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('String converted to Lower case','success');
    }
    const handleClear=()=>{
        setText("");
        props.showAlert('Text Box Cleared' , 'success');
    }
    const handleCopy=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied To Clipboard','success');
    }
    const handleEXSP=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed','success');
    }
    const [text, setText]=useState(' ');
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'} my-5`}>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label"><h3>{props.heading}</h3></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#212529' ,color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDnClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text Box</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleEXSP}>Remove Extra Spaces</button>
    </div>
    <div className={`container text-${props.mode==='light'?'dark':'light'} my-2`} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words nad {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
</>
  )
}
