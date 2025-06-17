import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import engineSound from '../../../assets/car-engine-ignition-fail.mp3';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DrawerMenu from '../drawer/DrawerMenu';

const Navbar = () => {
    const [animateTarget, setAnimateTarget] = useState<string | null>(null);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    
    
    const handleCloseDrawer = () => {
        
        setIsOpenDrawer(false);
    };

    const playEngineEffect = (target:string) => {
        const audio = new Audio(engineSound);
        audio.currentTime = 0;
        audio.play();

        setAnimateTarget(target);
        setTimeout(() =>{
            audio.pause();
            audio.currentTime = 0;
            setAnimateTarget(null);
        }, 400);
    }

    return(
        <header className="layout-header">
            <nav className="header">
                <Link className={`header-home ${animateTarget === 'home' ? 'rumble' : ''}`} to="/"><HomeIcon fontSize="large" onClick={()=>playEngineEffect('home')}/></Link>
                <div className="header-links">
                    <div className="header-items">
                        <Link className="links-item" to="/workshops" onClick={()=>playEngineEffect('workshops')}>Workshops</Link>
                        <Link className="links-item" to="/favorite" onClick={()=>playEngineEffect('favorite')}><FavoriteIcon/></Link>
                    </div>
                </div>
            </nav>
            <div className="mobile-nav">
                <Link className={`header-home ${animateTarget === 'home' ? 'rumble' : ''}`} to="/"><HomeIcon fontSize="large" onClick={()=>playEngineEffect('home')}/></Link>
                <MenuIcon fontSize="large" className="burger-icon" onClick={()=>setIsOpenDrawer(true)}/>
                <DrawerMenu isOpen={isOpenDrawer} closeDrawer={handleCloseDrawer}/> 
            </div>
        </header>
    )

}
export default Navbar;