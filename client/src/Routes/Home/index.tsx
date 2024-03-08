import Select from "../../Components/Select";
import NavBar from "../../Template/NavBar";
import Carousel from "./Carousel";
import Experiences from "./Experiences";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";

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
            <Select options={["hello", "bye", "good"]}/>
        </>
    );
}
