import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

const SectionHeader = ({title, normal}) => {
    const twilight = useTheme();

    return (
        <div id={title} className="section">
            {normal ? 
            <Typography variant="h3" sx={{color:twilight.peach, textAlign:"center", textDecoration:`underline 5px solid ${twilight.turquoise}`, marginBottom:"25px", fontFamily:"monospace"}}>{title}</Typography> : 
            <Typography variant="h3" sx={{color:twilight.dark, textAlign:"center", textDecoration:`underline 5px solid ${twilight.turquoise}`, marginBottom:"25px", fontFamily:"monospace"}}>{title}</Typography>}
        </div>
    )
}

export default SectionHeader;