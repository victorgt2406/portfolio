import { Link } from "react-router-dom";
import Presentation from "../../Components/Presentation";
import Experiences from "../../Components/Experiences";
import Skills from "./Skills";
import Education from "../../Components/Education";
import style from "./style";

export default function Cv() {
    return (
        <div className="mx-4 my-1">
            <div dangerouslySetInnerHTML={{ __html: style }}/>
            <Presentation />
            <Experiences />
            <Education/>
            <Skills/>
            <Link to={"https://victorgt2406.github.io/portfolio/"}>Web</Link>
        </div>
    );
}
