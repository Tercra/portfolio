import { Typography } from "@mui/material";
import SectionHeader from "./SectionHeader";

const Skills = () => {
    const icons = require('../data/skills.json');
    // console.log(icons);

    const skillList = Object.keys(icons).map((name) => {
        return (
            <div className="skillCard" key={name}>
                <i className={icons[name]}></i>
                <p>{name}</p>
            </div>
        )
    })

    return (
        <div className="changeBG">
            <div className="topChangeBG"></div>
            <SectionHeader title="Skills" normal={false} />
            <div className="skillHolder">
                {skillList}
            </div>
        </div>
    )
}

export default Skills;