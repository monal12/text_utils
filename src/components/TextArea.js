import React,{useState} from 'react'

export default function TextArea() {
    const [text,setText]=useState("Enter text to analyze");
    function handleOnUpClick(){
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    function handleOnLoClick(){
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    function handleOnClear(){
        setText("");
    }
    function handleOnExtraSpace(){
        let newtext=text.split(/[ ]+/).join(' ');
        setText(newtext);
    }
    function handleOnCopy(){
        navigator.clipboard.writeText(text)
    }

    function handleOnChange(event){
        setText(event.target.value);
    }
    let wordCount=text.split(' ').filter((element)=>(element!=='')).length;
    return (
        <>
            <div className="container my-3">
                <h3>Enter Text: </h3>
                <textarea className="form-control" aria-label="With textarea" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary my-2" onClick={handleOnUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleOnLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleOnClear}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleOnExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleOnCopy}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h3>Text Summary:</h3>
                <p>{wordCount} words and {text.length} characters.<br/>
                Reading Time: {Math.ceil(wordCount*0.008)} minutes</p>
                <h3>Preview:</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
