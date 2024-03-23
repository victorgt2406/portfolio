import { useContext } from "react";
import Context from "../../utils/Context";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import NavLink from "./NavLink";
import NavBtnDark from "./NavButtons/NavBtnDark";
import NavBtnLang from "./NavButtons/NavBtnLang";
import NavBtnPrintCV from "./NavButtons/NavBtnPrintCV";

export default function NavBar() {
    const { lang } = useContext(Context);

    const elements: JSX.Element[] = [
        <NavLink
            title={capitalizeFirstLetter(lang.home)}
            to={"/"}
            icon={<i className="bi bi-house-fill"></i>}
        />,
        <NavLink
            title={capitalizeFirstLetter(lang.contact)}
            to={"/contact"}
            icon={<i className="bi bi-person-lines-fill"></i>}
        />,
        <NavBtnLang/>,
        <NavBtnDark/>,
        <NavBtnPrintCV/>
    ];
    return (
        <div
            className="w-100 d-flex justify-content-end p-2 navBar flex-wrap"
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
