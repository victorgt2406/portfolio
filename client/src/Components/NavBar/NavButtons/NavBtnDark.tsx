import { useContext } from "react";
import NavBtn from "../NavBtn";
import { DARKMODES } from "../../../types/OptionsTypes";
import Context from "../../../utils/Context";
import NavDropdownItem from "../NavDropdownItem";
import isMobile from "../../../utils/isMobile";

export default function NavDark() {
    const context = useContext(Context);

    const handleChangeMode = () => {
        let index = DARKMODES.indexOf(context.dark);
        index++;
        if (index >= DARKMODES.length) index = 0;
        context.setDark(DARKMODES[index]);
    };

    return !isMobile() ? (
        <NavBtn
            title={context.dark}
            icon={<i className="bi bi-moon-stars-fill"></i>}
            onClick={handleChangeMode}
        ></NavBtn>
    ) : (
        <NavDropdownItem
            title={context.dark}
            icon={<i className="bi bi-moon-stars-fill"></i>}
            onClick={handleChangeMode}
        />
    );
}
