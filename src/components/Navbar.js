import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  render() {
    return (
      <nav className={`navbar  navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`} style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{this.props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>0
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}

              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
            {/* <a  className="nav-link" href="/">{this.props.aboutText}</a> */}

              <a  className="nav-link" href="/about">{this.props.aboutText}</a>
            </li>
         
          </ul>
 
<div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'}`}>
  <input className='form-check-input' onClick={this.props.toggleMode} type='checkbox'/>
  <label htmlFor="switch" className='form-check-label'>Enable Search</label>

</div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar;
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string

}
// Navbar.defaultProps={
//   title:"this is defult",
//   aboutText:"about defule"
// }