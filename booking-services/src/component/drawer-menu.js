import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
// import localforage from 'localforage';

//material-ui core
import {Divider, List, ListItem, ListItemIcon, ListItemText, Collapse} from '@material-ui/core';

//material-ui Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TodayIcon from '@material-ui/icons/Today';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({

    header: {
        height: 100,
        backgroundColor: '#dbdbdb',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    list: {
        width: 250,
    },
    listItem: {
        minWidth: 40,
    },
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

}));

const DrawersMenu = (props) => {
    const classes = useStyles();
    let history = useHistory();
    const {drawer, setDrawer} = props;

    //logout--------------------------------------------------------------------------------------------------------------
    const logout = () => {
        // localforage.clear().then(() => {
        //     history.push('/login');
        // });
    };

    return (
        <div className={classes.list}>
            <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>

                <div className={classes.header}>
                    <div style={{margin: '0px 5px'}}>
                        <AccountCircleIcon style={{ fontSize: 45 }}  />
                    </div>
                    <div>
                        admin <br />
                        admin@gmail.com
                    </div>

                </div>
                {/*<Divider />*/}
                <ListItem button onClick={null}>
                    <ListItemIcon className={classes.listItem}>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Beranda" />
                </ListItem>

                {/* Notifikasi */}
                <ListItem button onClick={null}>
                    <ListItemIcon className={classes.listItem}>
                        <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notifikasi" />
                </ListItem>

                {/* Jadwal Petemuan */}
                <ListItem button onClick={null}>
                    <ListItemIcon className={classes.listItem}>
                        <TodayIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jadwal Pertemuan" />
                </ListItem>

                {/* logout */}
                <div style={{position:'fixed', bottom:1, width: 250}}>
                    <Divider />
                    <ListItem button onClick={logout}>
                        <ListItemIcon className={classes.listItem}>
                            <ExitToAppIcon style={{color: '#C0392B'}} />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </div>

            </List>
        </div>
    );
};

export default DrawersMenu;
