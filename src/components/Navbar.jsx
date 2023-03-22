import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = (props) => {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
         <a className='nav-link'  href="#"><p>TextUtils</p></a>
      </li>
      
    </ul>
  </div>
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  for="flexSwitchCheckDefault">Enable dark mode</label>
</div>
</nav>
    </>
  )
}

export default Navbar
