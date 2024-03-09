import React, { createContext, useEffect, useState } from "react";
import { CV as CVtype } from "./CVtype";
import cv_es from "../assets/cv_es.json";
import Cookies from "js-cookie";

const CV = {
    en: cv_es,
    es: cv_es,
};

type Lang = "en" | "es";

type Darkmode = "light" | "dark" | "system";

type ContextProps = {
    cv: CVtype;
    dark: Darkmode;
    setDark: (dark: Darkmode) => void;
    lang: Lang;
    setLang: (lang: Lang) => void;
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
            surnames: "",
        },
        skills: [],
        education: [],
        experience: [],
        projects: [],
    },
};

const Context = createContext<ContextProps>(defaultValues);

function ContextProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState<Darkmode>("light");
    const [lang, setLang] = useState<Lang>("es");
    const [cv, setCv] = useState<CVtype>(cv_es);

    const handleSetDark = (dark: Darkmode) => {
        switch (dark) {
            case "light":
                // alert("light mode");
                document
                    .getElementById("style")!
                    .setAttribute("href", "/styles/light.css");
                break;
            case "dark":
                // alert("dark mode");
                document
                    .getElementById("style")!
                    .setAttribute("href", "/styles/dark.css");
                break;
            case "system":
                break;
        }
        setDark(dark);
        Cookies.set("dark", dark);
    };

    const handleSetLanguage = (lang: Lang) => {
        setCv(CV[lang]);
        setLang(lang);
        Cookies.set("lang", lang);
    };

    const value: ContextProps = {
        cv,
        dark,
        setDark: handleSetDark,
        lang,
        setLang: handleSetLanguage,
    };

    useEffect(() => {
        if (Cookies.get("dark")) handleSetDark(Cookies.get("dark") as Darkmode);
        if (Cookies.get("lang")) handleSetLanguage(Cookies.get("lang") as Lang);
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
    }, []);

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;

export { ContextProvider };

export type { Lang as Langs, Darkmode };
