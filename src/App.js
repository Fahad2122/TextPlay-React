import React, {useState} from 'react';
import Alerts from './components/Alerts';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [redMode, setRedMode] = useState('light');
  const [redSwitchColor, setRedSwitchColor] = useState('white');

  const [greenMode, setGreenMode] = useState('light');
  const [greenSwitchColor, setGreenSwitchColor] = useState('white');

  const [mode, setMode] = useState('light');
  const [switchColor, setSwitchColor] = useState('white');
  const [alert, setAlert] = useState(null);

  const toggleRedMode = ()=> {
    if(redMode === 'light'){
      setRedMode('#780611');
      setRedSwitchColor('#df4759');
      document.body.style.backgroundColor = '#f78590';
      setAlertFunc('Red mode enabled', 'success');
    }
    else{
      setRedMode('light');
      setRedSwitchColor('white');
      document.body.style.backgroundColor = 'white';
      setAlertFunc('light mode enabled', 'success');
    }
  }
  const toggleGreenMode = ()=> {
    if(greenMode === 'light'){
      setGreenMode('green');
      setGreenSwitchColor('#5cb85c');
      document.body.style.backgroundColor = '#59efa9';
      setAlertFunc('Green mode enabled', 'success');
    }
    else{
      setGreenMode('light');
      setGreenSwitchColor('white');
      document.body.style.backgroundColor = 'white';
      setAlertFunc('light mode enabled', 'success');
    }
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('black');
      setSwitchColor('#0275d8');
      document.body.style.backgroundColor = '#343a40';
      setAlertFunc('dark mode enabled', 'success');
    }
    else{
      setMode('light');
      setSwitchColor('white');
      document.body.style.backgroundColor = 'white';
      setAlertFunc('light mode enabled', 'success');
    }
  }

  const setAlertFunc = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextPlay" mode={mode} redMode={redMode} greenMode={greenMode} toggleMode={toggleMode} toggleRedMode={toggleRedMode} toggleGreenMode={toggleGreenMode} switchColor={switchColor} redSwitchColor={redSwitchColor} greenSwitchColor={greenSwitchColor}/>
    <Alerts alert={alert} />
    <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}/> */}
          {/* <Route exact path="/" element={<Textform lable='Enter Text here' mode={mode} redMode={redMode} greenMode={greenMode} setAlertFunc={setAlertFunc}/>}/> */}
          <Textform lable='Enter Text here' mode={mode} redMode={redMode} greenMode={greenMode} setAlertFunc={setAlertFunc}/>
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
