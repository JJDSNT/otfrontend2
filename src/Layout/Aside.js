import React from 'react';
import avatar from './assets/avatar.jpg';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from './assets/bg.jpg';

const Aside = ({ collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
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
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            {intl.formatMessage({ id: 'dashboard' })}
          </MenuItem>
          <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'components' })}</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title='Eixos'
            icon={<FaRegLaughWink />}
          >
            <MenuItem>Saúde</MenuItem>
            <MenuItem>Educação</MenuItem>
            <MenuItem>Assistência Social</MenuItem>
            <MenuItem>Educação</MenuItem>
            <MenuItem>Saúde</MenuItem>
            <MenuItem>Educação</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'withPrefix' })}
            icon={<FaHeart />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
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
              {intl.formatMessage({ id: 'viewSource' })}
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;