import React, { useState } from 'react'

export default function About() {
    const [mode, setMode]=useState("light");
    const [style,setStyle]=useState(null);
    function toggleMode(){
        if (mode==="dark"){
            setMode("light")
            setStyle(null)
        }else{
            setMode("dark")
            setStyle({
                color:"white",
                backgroundColor:"black"
            })
        }
    }
    function oppositeOf(mode){
        return(mode==="light"?"dark":"light")
    }
    return (
        <div className="container" style={style}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample"  style={style}>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" style={style}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
                            <strong>Analyze and Convert Text online - Anywhere, Anytime</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={style}>
                        <div className="accordion-body" style={style}>
                            Works on all platforms and browsers. Multiple text anlaysis and conversion features in one interface.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" style={style}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
                            <strong>Easy to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={style}>
                        <div className="accordion-body" style={style}>
                            Click and Point interactions - Analyse text on-the-fly as you type.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={style}>
                    <h2 className="accordion-header" style={style}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={style}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style}>
                            NO CONTENT AVAILABLE
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-check form-switch" style={style}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {oppositeOf(mode)} mode</label>
            </div>
        </div>
    )
}
