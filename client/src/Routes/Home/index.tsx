import { motion } from "framer-motion";
import NavBar from "../../Components/NavBar";
// import Carousel from "./Carousel";
import Experiences from "./Experiences";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
    return (
        <>
            <NavBar />
            <motion.div
                layout
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-100 my-2 d-flex flex-column align-items-center container"
            >
                <Presentation />
                {/* <Carousel /> */}
                <Skills />
                <Experiences />
                <Projects />
            </motion.div>
        </>
    );
}
