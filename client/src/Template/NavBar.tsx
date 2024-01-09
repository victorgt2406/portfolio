import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

type ElementProps = {
    title: string;
    link?: string;
    onClick?: () => void;
    icon: JSX.Element;
};

// Button and Link at the same time, to make sure to hace same style.
function Element(props: ElementProps) {
    const { link, title, onClick, icon } = props;
    const isLink = link !== undefined;
    const element = (
        <div className="p-2 d-flex">
            {icon}
            <div className="ps-2">{title}</div>
        </div>
    );
    if (isLink) {
        return <Link to={link}>{element}</Link>;
    } else {
        return (
            <div className="a" onClick={onClick}>
                {element}
            </div>
        );
    }
}

export default function NavBar() {
    const { dark, setDark } = useContext(Context);
    const elements: JSX.Element[] = [
        <Element
            title={"Contact"}
            link={"contact"}
            icon={<i className="bi bi-person-lines-fill"></i>}
        />,
        <Element
            title={dark === "light" ? "Dark" : "Light"}
            onClick={() => {
                setDark(dark === "light" ? "dark" : "light");
            }}
            icon={
                dark === "light" ? (
                    <i className="bi bi-moon-stars-fill"></i>
                ) : (
                    <i className="bi bi-brightness-high-fill"></i>
                )
            }
        />,
    ];
    return <div className="d-flex justify-content-end">{...elements}</div>;
}
