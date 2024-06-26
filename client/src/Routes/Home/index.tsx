import Education from "../../Components/Education";
import Experiences from "../../Components/Experiences";
import NavBar from "../../Components/NavBar";
import Presentation from "../../Components/Presentation";
// import Carousel from "./Carousel";
// import Experiences from "./Experiences";
// import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
    return (
        <div
            className="w-100 d-flex flex-column align-items-center container"
        >
            <NavBar />
            <Presentation />
            <br/>
            <Skills />
            <br/>
            <Experiences />
            <br/>
            <Education/>
            <br/>
            <Projects />
        </div>
    );
}
