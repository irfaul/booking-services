import React from 'react';
import logo from '../assets/logo-brimo.png';
import DrawerMenu from './drawer-menu';

//materials core
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

//material icons
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Nav() {

    const [drawer, setDrawer] = React.useState(false);

    return (
        <nav className="navbar sticky-top">
            <div>
                <IconButton aria-label="menu" onClick={() => setDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor={'left'}
                    open={drawer}
                    onClose={() => setDrawer(false)}>
                    <DrawerMenu
                        drawer={drawer}
                        setDrawer={setDrawer}
                    />
                </Drawer>
            </div>
            <div>
                <a className="navbar-brand" href="/bpba/home">
                    <img src={logo} className="account-logo" alt="Brimo" loading="lazy" />
                </a>
            </div>
            <div className="icons-bell">
                <IconButton aria-label="notifications">
                    <NotificationsIcon />
                </IconButton>
            </div>
        </nav>
    )
}