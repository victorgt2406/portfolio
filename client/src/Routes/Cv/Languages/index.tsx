import { useContext } from "react";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import Context from "../../../utils/Context";
import Language from "./Language";



export default function Languages(){
    const { lang, cv } = useContext(Context);
    const languages = cv.languages;

    return (
        <div>
            <h2>{capitalizeFirstLetter(lang.languages)}</h2>
            <ul>
                {languages.map((lang)=><li key={lang.title}><Language {...lang}/></li>)}
            </ul>
        </div>
    );
}