import { SkillsCategories } from "../../../types/CVtypes";



export default function Category({category, skills}:SkillsCategories){
    return (
        <div className="d-flex align-items-center col-sm-6 col-12 px-1">
            <span className="fw-bold me-2 fs-7">{category}:</span>
            <span className="fw-light fst-italic fs-8">{skills.join(", ")}</span>
        </div>
    );
}