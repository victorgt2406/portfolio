import React, { createContext, useState } from "react";
import { CV as CVtype } from "./CVtype";
import cv_es from "../assets/cv_es.json";

const CV = {
    "en": cv_es,
    "es": cv_es
}

type Langs = "en" | "es";

type Darkmode = "light" | "dark" | "system";

type ContextProps = {
    cv: CVtype;
    dark: Darkmode;
    setDark: (dark: Darkmode) => void;
    lang: Langs;
    setLang: (lang: Langs) => void;
};

const defaultValues: ContextProps = {
    dark: "light",
    setDark: function (): void {
        throw new Error("Function not implemented.");
    },
    lang: "en",
    setLang: function (): void {
        throw new Error("Function not implemented.");
    },
    cv: {
        presentation: {
            fullname: "",
            name: "",
            surnames: ""
        },
        skills: [],
        education: [],
        experience: [],
        projects: []
    }
};

const Context = createContext<ContextProps>(defaultValues);

function ContextProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState<Darkmode>("light");
    const [lang, setLang] = useState<Langs>("es");
    const [cv, setCv] = useState<CVtype>(cv_es);

    const handleSetDark = (dark: Darkmode) => {
        switch (dark) {
            case "light":
                // alert("light mode");
                document.getElementById('style')!.setAttribute('href', "/styles/light.css");
                break;
            case "dark":
                // alert("dark mode");
                document.getElementById('style')!.setAttribute('href', "/styles/dark.css");
                break;
            case "system":
                break;
        }
        setDark(dark);
    }

    const handleSetLanguage = (lang: Langs) => {
        setCv(CV[lang])
        setLang(lang);
    }

    const value: ContextProps = {
        cv,
        dark,
        setDark: handleSetDark,
        lang,
        setLang: handleSetLanguage,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;

export { ContextProvider };

export type { Langs, Darkmode };
