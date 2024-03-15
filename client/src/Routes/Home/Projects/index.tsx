import { useContext } from "react";
import Project from "./Project";
import Context from "../../../utils/Context";

export default function Projects() {
    const context = useContext(Context);
    const projects = context.cv.projects.map((project, i) => (
        <div className="p-2 col-sm-12 col-md-12 col-lg-6">
            <Project key={i} {...project} />
        </div>
    ));

    return (
        <div className="my-3 d-flex flex-column justify-content-center">
            <h2>Projects</h2>
            <div className="d-flex justify-content-start flex-wrap">{...projects}</div>
        </div>
    );
}
