import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useEffect, useLayoutEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const MENU_SWITCH_WIDTH = 1100;
    const twilight = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.window.innerWidth);

    const naviOptions = ["Top", "Projects"];

    useLayoutEffect(() => {
        function resize() {
            setWindowWidth(window.window.innerWidth);
        }

        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, [])

    const menu = () => {
        const handleClick = (id)=>{
            console.log(document.getElementById(id));
            // setMenuOpen(false); this will cancel the scoll animation
            document.getElementById(id).scrollIntoView({behavior:"smooth"});
            
            let isScrolling;
            window.addEventListener("scroll", () => {
                window.clearTimeout(isScrolling);

                isScrolling = setTimeout(() => {
                    setMenuOpen(false);
                }, 40)
            }, false);
        }

        return (
        <List sx={{backgroundColor:twilight.lightDark, color:twilight.lightPeach}}>
            {naviOptions.map((text) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton onClick={()=>{handleClick(text)}}>
                        <ListItemText disableTypography primary={text} style={{display:"flex", justifyContent:"flex-end", fontSize:"1.8rem"}} />
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
        const handleClick = (id)=>{
            document.getElementById(id).scrollIntoView({behavior:"smooth"});
        }

        return (
            <>
            {naviOptions.map((text) => {
                return <button key={text} className="headerButt" onClick={() => handleClick(text)}>{text}</button>
            })}
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
        <Box sx={{width:'100%', backgroundColor:twilight.dark, padding:'10px 0', position:"sticky", top:0}}>
            <div style={{maxWidth:"1140px", width:"80%", margin:'auto', display:'flex'}}>
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
