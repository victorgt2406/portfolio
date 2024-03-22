import { useContext } from "react";
import Context from "../../utils/Context";
import Element from "./Element";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

export default function NavBar() {
    const { lang } = useContext(Context);

    const elements: JSX.Element[] = [
        <Element
            title={capitalizeFirstLetter(lang.home)}
            link={"/"}
            icon={<i className="bi bi-house-fill"></i>}
        />,
        <Element
            title={capitalizeFirstLetter(lang.contact)}
            link={"/contact"}
            icon={<i className="bi bi-person-lines-fill"></i>}
        />
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
