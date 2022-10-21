import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useEffect, useLayoutEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const MENU_SWITCH_WIDTH = 1100;
    const twilight = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.window.innerWidth);

    useLayoutEffect(() => {
        function resize() {
            setWindowWidth(window.window.innerWidth);
        }

        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, [])

    const menu = () => {
        return (
        <List sx={{backgroundColor:twilight.lightDark, color:twilight.lightPeach}}>
            {["Timeline", "Project", "Skills", "digimon"].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemText disableTypography primary={text} style={{display:"flex", justifyContent:"flex-end", fontSize:"25px"}} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        )
    }

    const menuList = () => {
        return (
        <IconButton onClick={()=>{setMenuOpen(true)}}>
            <MenuIcon sx={{color:twilight.lightPeach, fontSize:30}} ></MenuIcon>
        </IconButton>
        )
    }

    const headerButtons = () => {
        return (
            <>
            <div className='headerButt'>
                <a>Timeline</a>
            </div>
            <div className='headerButt'>
                <a>Project</a>
            </div>
            <div className='headerButt'>
                <a>Skills</a>
            </div>
            <div className='headerButt'>
                <a>digimon</a>
            </div>
            </>
        )
    }

    const onCloseEvent = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setMenuOpen(open);
    }

    return (
        <Box sx={{width:'100%', backgroundColor:twilight.dark, padding:'10px 0'}}>
            <div style={{width:"80%", margin:'auto', display:'flex'}}>
                <h2 style={{display:'inline-block', color:twilight.lightPeach, margin:'0', fontSize:'30px'}}>Vicky Chan</h2>
                <div className="headerButts">
                    {windowWidth >= MENU_SWITCH_WIDTH ? headerButtons():menuList()}
                    <Drawer anchor="top" open={menuOpen} onClose={onCloseEvent(false)}>
                        {menu()}
                    </Drawer>
                </div>
            </div>
        </Box>
    )
}

export default Header
