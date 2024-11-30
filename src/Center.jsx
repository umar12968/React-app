import {useState} from "react"


function Center(props) {
  const handleclick = () => {
    let newtext =  text.toUpperCase(); 
    setText(newtext);
  }
  const handleonclick = (event) => {  
    setText(event.target.value) 
  } 
  
  const target = () => {
    let newtext =  text.toLowerCase(); 
    setText(newtext);
  }
  
  
  const [text, setText] = useState('')
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Text Analyzing</h1>
<div className="mb-3">
  <label  className="form-label">Example textarea</label>
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} placeholder="Enter text here" value={text} id="MyText" rows="3" onChange={handleonclick}></textarea>
</div>

<a className="btn btn-primary mx-2" role="button" aria-disabled="true" onClick={handleclick}>To Uppercase</a>
<a className="btn btn-primary mx-2" role="button" aria-disabled="true" onClick={target}>To Lowercase</a>

</div>

    </>
  )
}

export default Center