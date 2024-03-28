import { SkillsCategories } from "../../../types/CVtypes";



export default function Category({category, skills}:SkillsCategories){
    return (
        <div className="d-flex col-sm-6 col-12 fs-8">
            <span className="fw-bold me-2">{category}:</span>
            <span className="fw-light fst-italic">{skills.join(", ")}</span>
        </div>
    );
}