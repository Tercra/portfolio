import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"
import { fontFamily } from "@mui/system";
import { useLayoutEffect, useState } from "react";

const Introduction = () => {
    const DISPLAY_SWITCH_WIDTH = 1000;
    const twilight = useTheme();
    const [wrap, setWrap] = useState("nowrap");

    useLayoutEffect(() => {
        function resize() {
            if(window.window.innerWidth < DISPLAY_SWITCH_WIDTH){
                setWrap("wrap");
            }
            else{
                setWrap("nowrap");
            }
        }

        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, [])


    return (
        <Box sx={{border:`dashed 5px ${twilight.turquoise}`, width:"60%", margin:"100px auto", padding:"30px"}}>
            <Typography variant="h1" color={twilight.lightPeach} fontFamily="monospace">
                Vicky
            </Typography>
            <Box sx={{display:"flex", flexWrap:wrap}}>
                <Typography variant="h4" color={twilight.peach} fontFamily="monospace">
                    Status: 
                </Typography>
                <Typography variant="h4" color={twilight.peach} fontFamily="monospace">
                    Graduated from Stony Brook University and is currently seeking a job.
                </Typography>
            </Box>
        </Box>
    )
}

export default Introduction;