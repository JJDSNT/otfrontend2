import React from 'react';
import { useIntl } from 'react-intl';
import reactLogo from './assets/logo.jpg';

const Navbar = () => {
    const intl = useIntl();
    return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" role = "navigation">

        <img width={80} src={reactLogo} alt="react logo" /> {intl.formatMessage({ id: 'title' })}
        
        </nav>  
        );
};

export default Navbar
      
      