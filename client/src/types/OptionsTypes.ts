import langEn from "../langs/LangEn";
import langEs from "../langs/LangEs";
import { Lang } from "./LangType";

type LangOption = "en" | "es";
const LANGS_OPTIONS:LangOption[] = ["en", "es"];
const LANGS: Record<LangOption, Lang> = {
    "en": langEn,
    "es": langEs
}

type Darkmode = "Light ☀️" | "Dark 🌙" | "System 💻";
const DARKMODES = ["Light ☀️", "Dark 🌙", "System 💻"];

export { DARKMODES, LANGS_OPTIONS, LANGS };

export type { LangOption, Darkmode };