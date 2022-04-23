import React from 'react';
import { FaBars } from 'react-icons/fa';


const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {

  return (
    <main>
      A<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />B
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />C
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
teste
      </header>
      alo
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
    </main>
  );
};

export default Main;