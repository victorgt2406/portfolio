import { useContext } from "react";
import Context from "../../utils/Context";
import Degree from "./Degree";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";


export default function Education() {
    const context = useContext(Context);
    const Courses = context.cv.education.sort((a, b) => (new Date(b.start)).getTime() - (new Date(a.start)).getTime()).map((exp, index) => <Degree key={index} {...exp} />)

    return (
        <div className="d-flex flex-column w-100">
            <h2>{capitalizeFirstLetter(context.lang.education)}</h2>
            {...Courses}
        </div>
    );
}