import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

const SectionHeader = ({title}) => {
    const twilight = useTheme();

    return (
        <div id={title} className="section">
            <Typography variant="h3" sx={{color:twilight.peach, textAlign:"center", textDecoration:`underline 5px solid ${twilight.turquoise}`, marginBottom:"25px"}}>{title}</Typography>
        </div>
    )
}

export default SectionHeader;