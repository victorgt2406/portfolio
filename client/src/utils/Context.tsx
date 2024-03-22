import React, { createContext, useEffect, useState } from "react";
import { CV as CVtype } from "../types/CVtypes";
import cv_es from "../assets/cv_es.json";
import cv_en from "../assets/cv_en.json";
import Cookies from "js-cookie";
import getSystemLangOption from "./getSystemLangOption";
import { Darkmode, LangOption, LANGS } from "../types/OptionsTypes";
import { Lang } from "../types/LangType";

const CV = {
    en: cv_en,
    es: cv_es,
};

type ContextProps = {
    cv: CVtype;
    dark: Darkmode;
    setDark: (dark: Darkmode) => void;
    langOption: LangOption;
    lang: Lang;
    setLangOption: (lang: LangOption) => void;
};

const defaultValues: ContextProps = {
    dark: "Light ☀️",
    setDark: function (): void {
        throw new Error("Function not implemented.");
    },
    langOption: "en",
    setLangOption: function (): void {
        throw new Error("Function not implemented.");
    },
    cv: {
        presentation: {
            fullname: "",
            name: "",
            surnames: "",
            brief: ""
        },
        skills: [],
        education: [],
        experience: [],
        projects: [],
    },
    lang: {
        home: "",
        contact: "",
        skills: "",
        experiences: "",
        projects: ""
    }
};

const Context = createContext<ContextProps>(defaultValues);

function ContextProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState<Darkmode>("System 💻");
    const [langOption, setLangOption] = useState<LangOption>(getSystemLangOption());
    const [cv, setCv] = useState<CVtype>(cv_es);
    const [lang, setLang] = useState(LANGS["es"])

    const handleSetDark = (dark: Darkmode) => {
        switch (dark) {
            case "Light ☀️":
                // alert("light mode");
                document
                    .getElementById("style")!
                    .setAttribute("href", "/styles/light.css");
                break;
            case "Dark 🌙":
                // alert("dark mode");
                document
                    .getElementById("style")!
                    .setAttribute("href", "/styles/dark.css");
                break;
            case "System 💻":
                // eslint-disable-next-line no-case-declarations
                const systemDark =
                    window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches;
                // Dark 🌙
                if (systemDark) {
                    document
                        .getElementById("style")!
                        .setAttribute("href", "/styles/dark.css");
                }
                // Light ☀️
                else {
                    document
                        .getElementById("style")!
                        .setAttribute("href", "/styles/light.css");
                }
                break;
        }
        setDark(dark);
        Cookies.set("dark", dark);
    };

    const handleSetLanguage = (lang: LangOption) => {
        setCv(CV[lang]);
        setLangOption(lang);
        setLang(LANGS[lang]);
        Cookies.set("lang", lang);
    };

    const value: ContextProps = {
        cv,
        dark,
        setDark: handleSetDark,
        langOption: langOption,
        setLangOption: handleSetLanguage,
        lang
    };

    useEffect(() => {
        if (Cookies.get("dark")) handleSetDark(Cookies.get("dark") as Darkmode);
        else handleSetDark(dark)
        if (Cookies.get("lang")) handleSetLanguage(Cookies.get("lang") as LangOption);
        else handleSetLanguage(langOption)
        Cookies.set(
            "visits",
            JSON.stringify([
                ...(Cookies.get("visits")
                    ? JSON.parse(Cookies.get("visits")!)
                    : []),
                new Date().toISOString(),
            ])
        );
        console.log(JSON.parse(Cookies.get("visits")!));
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemDarkmode = ()=>handleSetDark(Cookies.get("dark")! as Darkmode)
        systemDark.addEventListener('change', handleSystemDarkmode);
        return () => {
            systemDark.removeEventListener('change', handleSystemDarkmode);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;

export { ContextProvider };
