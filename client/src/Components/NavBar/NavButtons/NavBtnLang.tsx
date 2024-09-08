import { useContext } from "react";
import NavBtn from "../NavBtn";
import { LANGS_OPTIONS } from "../../../types/OptionsTypes";
import Context from "../../../utils/Context";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import NavDropdownItem from "../NavDropdownItem";
import isMobile from "../../../utils/isMobile";

export default function NavLang() {
    const context = useContext(Context);

    const handleChangeMode = () => {
        let index = LANGS_OPTIONS.indexOf(context.langOption);
        index++;
        if (index >= LANGS_OPTIONS.length) index = 0;
        context.setLangOption(LANGS_OPTIONS[index]);
    };

    return !isMobile() ? (
        <NavBtn
            title={capitalizeFirstLetter(context.langOption)}
            icon={<i className="bi bi-translate"></i>}
            onClick={handleChangeMode}
        ></NavBtn>
    ) : (
        <NavDropdownItem
            title={capitalizeFirstLetter(context.langOption)}
            icon={<i className="bi bi-translate"></i>}
            onClick={handleChangeMode}
        />
    );
}
