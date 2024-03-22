import { useContext } from "react";
import Context from "../../../utils/Context";
import Experience from "./Experience";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";


export default function Experiences() {
    const context = useContext(Context);
    const Exps = context.cv.experience.sort((a, b) => (new Date(b.start)).getTime() - (new Date(a.start)).getTime()).map((exp, index) => <Experience key={index} {...exp} />)

    return (
        <div className="d-flex flex-column w-100">
            <h2>{capitalizeFirstLetter(context.lang.experiences)}</h2>
            {...Exps}
        </div>
    );
}