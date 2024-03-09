import { useContext } from "react";
import Context, { DARKMODES, Darkmode, LANGS, Lang } from "../../utils/Context";
import Select from "../Select";
import Element from "./Element";
import Spacer from "./Spacer";

export default function NavBar() {
    const { dark, setDark, lang, setLang } = useContext(Context);

    const elements: JSX.Element[] = [
        <Element
            title={"Contact"}
            link={"contact"}
            icon={<i className="bi bi-person-lines-fill"></i>}
        />,
        <Spacer/>,
        <Element
            title={"Language: "}
            icon={<i className="bi bi-translate"></i>}
        />
        ,
        <Select
            options={LANGS}
            title={lang}
            onChange={(option: string) => {
                setLang(option as Lang);
            }}
        />,
        <Spacer/>,
        <Element title={"Darkmode: "} icon={<i className="bi bi-moon"></i>} />,
        <Select
            options={DARKMODES}
            title={dark}
            onChange={(option: string) => {
                setDark(option as Darkmode);
            }}
        />,
    ];
    return (
        <div
            className="d-flex justify-content-end p-2 navBar"
            style={{
                position: "sticky",
                top: 0,
                zIndex: 999,
            }}
        >
            {...elements}
        </div>
    );
}
