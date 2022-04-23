import React from 'react';
import reactLogo from './assets/logo.jpg';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" role = "navigation">
            <div className="container">
                <div className = "navbar-header">

                    <div className="input-group">
                        <div id="navbar_avatar" style={{border:0}}>
                            <img width={32} src={reactLogo} alt="react logo" /> ObservaTudo
                        </div>
                        <h1  className = "navbar-brand"> observatudo </h1>
                        <input type="text" className="form-control  abs-center-x" placeholder="Pesquisar indicadores ..." />
                        
                        <button type="button" className="btn btn-primary">
                            <i className="fa fa-list"></i> Listar
                        </button>
                    </div>
                    
            </div>
        <button  id="showLeft" className="navbar-toggler navbar-toggler-right " type="button"  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            </div>
        </nav>
        );
};

export default Navbar
      
      