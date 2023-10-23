import React,{useState} from 'react'

export default function TextArea() {
    const [text,setText]=useState("Enter text to analyze");
    function handleOnUpClick(){
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    function handleOnChange(event){
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <h3>Enter Text: </h3>
                <textarea class="form-control" aria-label="With textarea" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary my-2" onClick={handleOnUpClick}>Convert To Uppercase</button>
            </div>

        </>
    )
}
