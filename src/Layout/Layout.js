import React, { useState } from 'react';
import Navbar from './Navbar';
import Aside from './Aside';
import Main from './Main';

function Layout({ setLocale }) {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };
  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  return (
  
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Navbar handleToggleSidebar={handleToggleSidebar} />

      <Aside        
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <Main
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
    </div>
  );
}

export default Layout;