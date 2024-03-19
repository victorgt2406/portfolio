import NavBar from "../../Components/NavBar";
import Carousel from "./Carousel";
import Experiences from "./Experiences";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./SkillsDeprecated";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="w-100 my-2 d-flex flex-column align-items-center  container">
                <Presentation />
                <Carousel />
                <Skills />
                <Experiences/>
                <Projects />
            </div>
        </>
    );
}
