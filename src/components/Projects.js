import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material"
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const Projects = () => {
    const twilight = useTheme();

    return (
        <Box>
            <SectionHeader title="Projects" />
            <ProjectCard />
        </Box>
    )
};

export default Projects