import Presentation from "../utils/Presentation";
import Carousel from "../utils/Carousel";

export default function () {
    return (
        <div className="m-2">
            <Presentation />
            <div className="container">
                <Carousel />
            </div>
        </div>
    );
}
