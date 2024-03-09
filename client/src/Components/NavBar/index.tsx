import { useContext } from "react";
import Context, { DARKMODES, Darkmode, LANGS, Lang } from "../../utils/Context";
import Select from "../Select";
import Element from "./Element";


export default function NavBar() {
    const { dark, setDark, lang, setLang } = useContext(Context);

    const elements: JSX.Element[] = [
        <Element
            title={"Contact"}
            link={"contact"}
            icon={<i className="bi bi-person-lines-fill"></i>}
        />,
        <Select
            options={LANGS}
            title={`Language: ${(lang).toUpperCase()}`}
            onChange={(option: string) => {
                setLang(option as Lang);
            }}
        />,
        <Select
            options={DARKMODES}
            title={`Darkmode: ${(dark)}`}
            onChange={(option: string) => {
                setDark(option as Darkmode);
            }}
        /> 
    ];
    return <div className="d-flex justify-content-end m-2">{...elements}</div>;
}
