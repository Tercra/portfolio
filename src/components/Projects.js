import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material"
import SectionHeader from "./SectionHeader";

const Projects = () => {
    const twilight = useTheme();

    return (
        <Box>
            <SectionHeader title="Projects" />
        </Box>
    )
};

export default Projects