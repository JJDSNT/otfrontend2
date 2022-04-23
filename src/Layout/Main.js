import React from 'react';
import { useIntl } from 'react-intl';
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
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
teste
      </header>
    </main>
  );
};

export default Main;