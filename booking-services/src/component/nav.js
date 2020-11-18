import React, {useState} from 'react';
import logo from '../assets/logo-brimo.png';
import DrawerMenu from './drawer-menu';

//materials core
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

//material icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
                <NotificationsIcon />
            </div>
        </nav>
    )
}