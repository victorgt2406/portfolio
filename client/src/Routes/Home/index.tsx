import NavBar from "../../Components/NavBar";
// import Carousel from "./Carousel";
import Experiences from "./Experiences";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
    return (
        <div
            className="w-100 d-flex flex-column align-items-center container"
        >
            <NavBar />
            <Presentation />
            <Skills />
            <Experiences />
            <Projects />
        </div>
    );
}
