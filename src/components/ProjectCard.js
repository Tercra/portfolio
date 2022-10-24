import { useTheme } from "@emotion/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Chip, Typography } from "@mui/material";
// import derit from "../projImages/Derit.png"

const ProjectCard = () => {
    const twilight = useTheme();

    return(
        <Box sx={{maxWidth:"800px", width:"80%", backgroundColor:twilight.lightTurquoise, margin:"25px auto", padding:"15px", borderRadius:"15px", display:"flex", flexFlow:"wrap"}}>
            {/* <img src={derit} alt="Derit" className="projectImage"/> */}
            <img src={require("../projImages/Derit.png")} alt="Derit" className="projectImage"/>
            <Box sx={{flexGrow:1, padding:"15px", minWidth:"350px", maxWidth:"50%"}}>
                <Typography variant="h3" sx={{fontFamily:"monospace", color:twilight.dark}}>Derit</Typography>
                <Box sx={{display:"flex", flexWrap:"wrap", gap:"5px"}}>
                    <Chip size="small" label="Node.js" sx={{fontFamily:"monospace", color:twilight.dark, marginBottom:"5px", backgroundColor:twilight.lightPeach}}/>
                    <Chip size="small" label="Express" sx={{fontFamily:"monospace", color:twilight.dark, marginBottom:"5px", backgroundColor:twilight.lightPeach}}/>
                    <Chip size="small" label="MongoDB" sx={{fontFamily:"monospace", color:twilight.dark, marginBottom:"5px", backgroundColor:twilight.lightPeach}}/>
                    <Chip size="small" label="React" sx={{fontFamily:"monospace", color:twilight.dark, marginBottom:"5px", backgroundColor:twilight.lightPeach}}/>
                    <Chip size="small" label="Socket.io" sx={{fontFamily:"monospace", color:twilight.dark, marginBottom:"5px", backgroundColor:twilight.lightPeach}}/>
                </Box>
                <Typography variant="body1" sx={{fontFamily:"monospace", color:twilight.dark, marginBottom:"10px"}}>Derit is a Full Stack Web App for collaborative real-time comic and story creation with a focus on community building and user interaction.</Typography>
                <div className="projButt"><a href="https://github.com/GabeLima/416-Project" target="_blank"><GitHubIcon sx={{fontSize:"20px"}} />Code</a></div>
            </Box>
        </Box>
    )
};

export default ProjectCard;