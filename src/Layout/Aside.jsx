import React from 'react';
import avatar from './assets/avatar.jpg';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaGithub, FaGlobeAmericas, FaHeartbeat, FaHome, FaList, FaMoneyBillWave, FaQuestion, FaSearch, FaUserGraduate,  FaShieldAlt, FaGem } from 'react-icons/fa';
import sidebarBg from './assets/bg.jpg';

const Aside = ({ collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={sidebarBg}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            paddingTop: '80px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
        <center>
        <img src={avatar} style={{width:'32px', height:'32px', top:'10px', left:'10px', borderRadius:'50%'}} alt="avatar"/>
        <br />
        user
        </center>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaHeartbeat />}> Saúde</MenuItem>
          <MenuItem icon={<FaUserGraduate />}> Educação</MenuItem>
          <MenuItem icon={<FaHome />}> Assistência social</MenuItem>
          <MenuItem icon={<FaShieldAlt />}> Segurança</MenuItem>
          <MenuItem icon={<FaGlobeAmericas />}> Meio ambiente,<br />Urbanização &<br />mobilidade</MenuItem>
          <MenuItem icon={<FaMoneyBillWave />}> Economia & Finanças</MenuItem>
          <MenuItem icon={<FaQuestion />}> Personalizado</MenuItem>
        </Menu>
        <Menu iconShape="square">
          <MenuItem icon={<FaSearch />}> Pesquisar indicadores</MenuItem>
          <MenuItem icon={<FaList />}> Listar indicadores</MenuItem>
          </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/JJDSNT/otfrontend2"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              Código-fonte
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;