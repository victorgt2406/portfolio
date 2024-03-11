import { Lang } from "./types";

export default function getSystemLang():Lang{
    let lang:Lang = "es"
    
    const sytemLang = (navigator.language).split("-")[0]
    if(sytemLang != "es"){
        lang = "en"
    }

    return lang;
}