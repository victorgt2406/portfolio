import { LangOption } from "../types/OptionsTypes";

export default function getSystemLangOption():LangOption{
    let lang:LangOption = "es"
    
    const sytemLang = (navigator.language).split("-")[0]
    if(sytemLang != "es"){
        lang = "en"
    }

    return lang;
}