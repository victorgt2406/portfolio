import { useContext } from "react";
import Context from "../../utils/Context";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

type MyProps = {
    description: string[];
    skills: string[];
};

export default function Description({ description, skills }: MyProps) {
    const context = useContext(Context);

    const descriptionElements = description.map((desc, index) => (
        <li key={index} className="fw-light">
            {desc}
        </li>
    ));

    return (
        <div className="d-flex flex-column">
            <div className="ps-1">
                <ul className="m-0">{...descriptionElements}</ul>
            </div>
            <div className="d-flex justify-content-start align-items-center w-100 flex-wrap mt-1">
                <span className="me-2">
                    {capitalizeFirstLetter(context.lang.skills)} :
                </span>
                {...skills.map((skill, index) => (
                    <>
                        <span
                            className={`text-center fw-light fst-italic ${
                                index === skills.length - 1 ? "" : "me-2"
                            }`}
                            key={index}
                        >
                            {skill}
                            {index === skills.length - 1 ? "" : ", "}
                        </span>
                    </>
                ))}
            </div>
        </div>
    );
}
