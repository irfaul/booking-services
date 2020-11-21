import React from 'react';
import logo from '../../assets/logo-brimo.png';
import DrawersMenuPba from './drawer-menu-pba';

//materials core
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

//material icons
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {Link} from 'react-router-dom'

export default function NavPBA() {

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
                    <DrawersMenuPba
                        drawer={drawer}
                        setDrawer={setDrawer}
                    />
                </Drawer>
            </div>
            <div>
                <a className="navbar-brand" href="./home">
                    <img src={logo} className="account-logo" alt="Brimo" loading="lazy" />
                </a>
            </div>
            <Link to="/pba/pemberitahuan">
            <div className="icons-bell">
                <NotificationsIcon color="error" style={{transform:'scale(1.5'}}/>
            </div>
            </Link>
        </nav>
    )
}