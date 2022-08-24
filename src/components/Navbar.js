import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

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
  return (
  <nav className="navbar navbar-expand-lg" style={{backgroundColor: setModeFunc()}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color: setModeFunc()==='#f7f7f7'?'black':'white'}}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='#' style={{color: setModeFunc()==='#f7f7f7'?'black':'white'}}>Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="about" style={{color: setModeFunc()==='#f7f7f7'?'black':'white'}}>About</Link>
        </li> */}
      </ul>
      <div className="form-check form-switch" style={{color: setModeFunc()==='#f7f7f7'?'black':'white'}}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleRedMode} style={{backgroundColor: props.redSwitchColor, borderColor: '#df4759'}}/>
        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Red Mode</label>
      </div>
      <div className="form-check form-switch" style={{color: setModeFunc()==='#f7f7f7'?'black':'white'}}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleGreenMode} style={{backgroundColor: props.greenSwitchColor, borderColor: '#5cb85c'}}/>
        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Green Mode</label>
      </div>
      <div className="form-check form-switch" style={{color: setModeFunc()==='#f7f7f7'?'black':'white'}}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} style={{backgroundColor: props.switchColor, borderColor: '#0275d8'}}/>
        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Title'
}