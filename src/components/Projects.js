import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material"
import SectionHeader from "./SectionHeader";

const Projects = () => {
    const twilight = useTheme();

    return (
        <Box>
            <div id="Projects" className="section"></div>
            <SectionHeader title="Projects" />
        </Box>
    )
};

export default Projects