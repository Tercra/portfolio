import { useTheme } from "@emotion/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Chip, Typography } from "@mui/material";

const ProjectCard = ({name, tools, descript, git, live}) => {
    const twilight = useTheme();

    return(
        <Box sx={{maxWidth:"800px", width:"80%", backgroundColor:twilight.lightTurquoise, margin:"30px auto", padding:"15px", borderRadius:"15px", display:"flex", flexFlow:"wrap"}}>
            <img src={require(`../projImages/${name}.png`)} alt={name} className="projectImage"/>
            <Box sx={{flexGrow:1, padding:"15px", minWidth:"350px", maxWidth:"50%"}}>
                <Typography variant="h3" sx={{fontFamily:"monospace", color:twilight.dark}}>{name}</Typography>
                <Box sx={{display:"flex", flexWrap:"wrap", gap:"5px"}}>
                    {tools.map((tool) => {
                        return <Chip key={tool} size="small" label={tool} sx={{fontFamily:"monospace", color:twilight.dark, marginBottom:"5px", backgroundColor:twilight.lightPeach, fontSize:".7125rem"}}/>
                    })}
                </Box>
                <Typography variant="body1" sx={{fontFamily:"monospace", color:twilight.dark, marginBottom:"10px"}}>{descript}</Typography>
                <div className="projLinks">
                    {git != undefined && <div className="projButt"><a href={git} target="_blank"><GitHubIcon sx={{fontSize:"20px"}} />Code</a></div>}
                    {live != undefined && <div className="projButt"><a href={live} target="_blank"><OpenInNewIcon sx={{fontSize:"20px"}} />Live</a></div>}
                </div>
            </Box>
        </Box>
    )
};

export default ProjectCard;