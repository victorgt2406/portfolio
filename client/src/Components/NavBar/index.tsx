import { useContext } from "react";
import Context, { DARKMODE, Darkmode } from "../../utils/Context";
import Select from "../Select";
import Element from "./Element";

export default function NavBar() {
    const { dark, setDark } = useContext(Context);

    const elements: JSX.Element[] = [
        <Element
            title={"Contact"}
            link={"contact"}
            icon={<i className="bi bi-person-lines-fill"></i>}
        />,
        <Select
            options={DARKMODE}
            title={dark}
            onChange={(option: string) => {
                setDark(option as Darkmode);
            }}
        />,
    ];
    return <div className="d-flex justify-content-end m-2">{...elements}</div>;
}
