import React from 'react';
import { FaList, FaSearch } from 'react-icons/fa';
import logo from './assets/logo.jpg';

const Navbar = ({
    collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange
}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:'blue'}} role = "navigation">
            <div className="container">
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
                        <div className="col-4">
                            <div className="input-group">
                                <input type="text" className="form-control  abs-center-x" placeholder="Pesquisar indicadores ..." aria-label="pesquisar indicadores" />
                                <button type="submit" class="btn btn-primary">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                        <div className="col-3">
                            <button type="button" class="btn btn-primary">
                                <FaList /> Listar
                            </button>
                        </div>
                    </div>
                    
            </div>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <span className="navbar-toggler-icon"></span>
      </div>
      aaa
        <button  onClick={() => handleToggleSidebar(true)} id="showLeft" className="navbar-toggler navbar-toggler-right " type="button"  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            </div>
        </nav>
        );
};

export default Navbar
