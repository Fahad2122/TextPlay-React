import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const [text, setText] = useState('');
  
  const UpClick = ()=> {
    setText(text.toUpperCase());
    props.setAlertFunc('uppercase converted', 'success');
  }
  const LwClick = ()=> {
    setText(text.toLowerCase());
    props.setAlertFunc('lowercase converted', 'success');
  }
  const resetClick =()=> {
    setText('');
    props.setAlertFunc('text cleared', 'warning');
  }
  const copyClick = ()=> {
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.setAlertFunc('copied to clipboard', 'success');
  }

  const OnChange = (event)=> {
    setText(event.target.value);
  }

  const wordCountFunc = ()=> {
    let len = text.split(" ").length-1;
    if(text.charAt(text.length-1)!== " " && text!== ''){
      len++;
    }
    return len;
  }

  const setModeFunc = ()=> {
    let modeColor = '#f7f7f7'
    if(props.mode!=='light'){
      modeColor = props.mode;
    }
    else if(props.redMode!=='light'){
      modeColor = props.redMode;
    }
    else if(props.greenMode!=='light'){
      modeColor = props.greenMode;
    }
    return modeColor;
  }
  const setBtnColor = ()=> {
    let btnColor = 'light'
    if(props.mode!=='light'){
      btnColor = 'primary';
    }
    else if(props.redMode!=='light'){
      btnColor = 'danger';
    }
    else if(props.greenMode!=='light'){
      btnColor = 'success';
    }
    return btnColor;
  }
  return (
    <>
        <div className="container" style={{color: setModeFunc()==='#f7f7f7'?'black':'white'}}>
            <h1>{props.lable}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={OnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}} placeholder='Text...'></textarea>
            </div>
            <button className={`btn btn-${setBtnColor()} mx-1`} onClick={UpClick}>Convert to UPPERCASE</button>
            <button type="button" className={`btn btn-${setBtnColor()} mx-1`} onClick={LwClick}>Convert to LowerCase</button>
            <button type="button" className={`btn btn-${setBtnColor()} mx-1`} onClick={copyClick}>Copt to ClipBoard</button>
            <button type="button" className={`btn btn-${setBtnColor()} mx-1`} onClick={resetClick}>Reset</button>
        </div>
        <div className="container my-3" style={{color: setModeFunc()==='#f7f7f7'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p><b>{wordCountFunc()}</b> words  and <b>{text.length}</b> characters</p>
            <p><b>{wordCountFunc() * 0.008}</b> Mintues Reading</p>
            <h3>Text Preview</h3>
            <p>{text.length>0?text:'Enter something for preview'}</p>
        </div>
    </>
  )
}

Textform.propTypes = {
    lable: PropTypes.string
}

Textform.defaultProps = {
    lable: 'Label'
}