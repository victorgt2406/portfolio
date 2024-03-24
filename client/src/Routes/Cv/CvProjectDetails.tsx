import { useContext } from "react";
import Context from "../../utils/Context";
import { Link } from "react-router-dom";

export default function CvProjectDetails() {
    const context = useContext(Context);

    return (
        <p className="mt-4 fs-8">
            {context.lang.cvProjectCreation}
            <Link
                className="d-inline ms-2"
                to={"https://github.com/victorgt2406/portfolio"}
                target="_blank"
            >
                GitHub/portfolio
            </Link>
        </p>
    );
}
