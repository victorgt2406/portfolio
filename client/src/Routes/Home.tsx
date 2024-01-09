import Carousel from "../home/Carousel";
import Presentation from "../home/Presentation";
import Projects from "../home/Projects";
import Skills from "../home/Skills";
import NavBar from "../utils/NavBar";

export default function Home () {
    return (
        <>
            <NavBar/>
            <div className="w-100 my-2 d-flex flex-column align-items-center  container">
                <Presentation />
                <Carousel />
                <Skills/>
                <Projects/>
            </div>
        </>
    );
}
