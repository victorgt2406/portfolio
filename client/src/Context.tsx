import React, { createContext, useState } from "react";

type Langs = "en" | "es";

type Darkmode = "light" | "dark" | "system";

type ContextProps = {
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
};

const Context = createContext<ContextProps>(defaultValues);

function ContextProvider ({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState<Darkmode>("light");
    const [lang, setLang] = useState<Langs>("es");

    const handleSetDark = (dark:Darkmode)=>{
        switch(dark){
            case "light":
                alert("light mode");
                break;
            case "dark":
                alert("dark mode")
                break;
            case "system":
                break;
        }
        setDark(dark);
    }

    const value: ContextProps = {
        dark,
        setDark: handleSetDark,
        lang,
        setLang,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;

export {ContextProvider};

export type {Langs, Darkmode};
