import { Link } from "react-router-dom";
import Presentation from "../../Components/Presentation";
import Experiences from "../../Components/Experiences";
import "./cv.css";
import Skills from "./Skills";

export default function Cv() {
    return (
        <div className="mx-4">
            <Presentation />
            <Experiences />
            <Skills/>
            <Link to={"https://victorgt2406.github.io/portfolio/"}>Web</Link>
        </div>
    );
}
