import { useContext } from "react";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import Context from "../../../utils/Context";
import Category from "./Category";



export default function Skills(){
    const { lang, cv } = useContext(Context);
    const skillsCategories = cv.skillsCategories;

    return (
        <div className="mb-2">
            <h2>{capitalizeFirstLetter(lang.skills)}</h2>
            <div className="d-flex flex-wrap">{...skillsCategories.map((skill)=><Category key={skill.category} {...skill}/>)}</div>
        </div>
    );
}