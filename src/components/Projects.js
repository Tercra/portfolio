import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material"
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const Projects = () => {
    const projects = require("../data/projects.json");

    return (
        <Box sx={{marginBottom:"60px"}}>
            <SectionHeader title="Projects" normal={true} />
            {Object.keys(projects).map((key) => {
                const proj = projects[key];

                return <ProjectCard key={key} name={key} tools={proj.Tools} descript={proj.Description} git={proj?.Git} live={proj?.Live} />
            })}
        </Box>
    )
};

export default Projects