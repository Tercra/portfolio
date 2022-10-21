import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

const SectionHeader = ({title}) => {
    const twilight = useTheme();

    return (
        <>
        <div id={title} className="section"></div>
        <Typography variant="h3" sx={{color:twilight.peach, textAlign:"center", textDecoration:`underline 5px solid ${twilight.turquoise}`, marginBottom:"50px"}}>{title}</Typography>
        </>
    )
}

export default SectionHeader;