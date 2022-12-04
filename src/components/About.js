import React from 'react'
import { useState } from 'react'

export default function About(props) {
    let myStyle={
      color: props.mode ==='dark'?'white':'#042743',
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
      border: '2px solid',
      borderColor: props.mode === 'dark'?'#042743':'white'
    }
  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analize your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body"  style={myStyle}>
                TextUtils gives you a way to analize your text qickly and efficiently. Be it word count, character count or
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body"  style={myStyle}>
                  TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatibility</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body"  style={myStyle}>
                This word counter software works in any browser such as Chrome, FireFox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, exel documnets, pdf documents, esseys, etc.  
              </div>
            </div>
          </div>
        </div> 
        
    </div>
  )
}
