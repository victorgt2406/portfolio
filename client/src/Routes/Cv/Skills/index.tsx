import { useContext } from "react";
import Context from "../../../utils/Context";
import Label from "./Label";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

export default function Skills() {
    const context = useContext(Context);
    const skillsObj = context.cv.skills;
    const labels = skillsObj.flatMap((skill) => skill.labels);
    const uniqLabels = Array.from(new Set(labels)).sort();
    return (
        <div>
            <h2>{capitalizeFirstLetter(context.lang.skills)}</h2>
            {/* Labels */}
            <div className="d-flex flex-wrap justify-content-start">
                {uniqLabels.map((uniqLabel, index) => (
                    <Label
                        key={index}
                    >
                        {capitalizeFirstLetter(uniqLabel)}
                    </Label>
                ))}
            </div>
        </div>
    );
}
