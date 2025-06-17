import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

interface DrawerMenuProps{
    isOpen:boolean,
    closeDrawer:()=>void
};

const DrawerMenu :React.FC<DrawerMenuProps>= ({isOpen,closeDrawer}) => {
    const anchor = "right";
    return (

        <Drawer
            anchor={anchor}
            open={isOpen}
            onClose={closeDrawer}
        >
            <Box sx={{width:"30vw", height:"100vh", background:"white"}}>
                <div className="mobile-drawer-close"><CloseIcon fontSize="large" onClick={closeDrawer}/></div>
                <div className="mobile-drawer">
                    <Link className="links-item" to="/workshops">Workshops</Link>
                    <Link className="links-item" to="/favorite"><FavoriteIcon/></Link>
                </div>        
            </Box>
        </Drawer>
    )

}

export default DrawerMenu;