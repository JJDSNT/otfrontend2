import React from 'react';
import logo from './assets/logo.jpg';

const Navbar = ({
  handleToggleSidebar
}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:'#041E42',paddingBottom:'2px',height:'50px'}} role = "navigation">
            <div className="container-fluid">
                <div className = "navbar-header">
                    <div className="row">
                        <div className="col-1">
                            <div id="navbar_avatar" style={{border:0}}>
                                <img style={{borderRadius: '50%',marginRight:'15px'}} width={32} src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className="col">
                            <h1 style={{paddingLeft:'10px'}} className = "navbar-brand"> ObservaTudo </h1>
                        </div>
                    </div>
                    
            </div>

            <button  onClick={() => handleToggleSidebar(true)} id="showLeft" className="navbar-toggler navbar-toggler-right" style={{marginTop:'-7px'}} type="button"  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            </div>
        </nav>
        );
};

export default Navbar
