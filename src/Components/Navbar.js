import React from 'react'

const Navbar = () => {
    return (
           <div className="row" style={{background: "black"}}>
            <div className="col-lg-12"> 
                 <nav className="navbar sticky-top navbar-expand-lg navbar" style={{float: "right"}}>
                    <div className="container">
                        <a className="navbar-brand m-2" href="/">
                        <span className="material-icons" style={{color: "white"}}>settings </span>
                        </a>
                        <a className="navbar-brand m-2" href="/">
                        <span className="material-icons" style={{color: "white"}}>power_settings_new</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
