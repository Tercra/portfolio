import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import Links from "./Links";

const Footer = () => {
    const twilight = useTheme();

    return (
        <footer>
            <div className="footerContainer">
                <Links />
                {/* <p>
                    vickychan480@gmail.com
                </p> */}
            </div>
        </footer>
    )
}

export default Footer;