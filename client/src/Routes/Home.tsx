import Presentation from "../utils/Presentation";
import Carousel from "../utils/Carousel";
import NavBar from "../utils/NavBar";

export default function () {
    return (
        <>
            <NavBar/>
            <div className="w-100 my-2 d-flex flex-column align-items-center  container">
                <Presentation />
                <Carousel />
            </div>
        </>
    );
}
