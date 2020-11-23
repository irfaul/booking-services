import React from 'react';
import DrawerMenu from '../../component/drawer-menu';

//materials core
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

//material icons
import MenuIcon from '@material-ui/icons/Menu';


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
            
        </nav>
    )
}