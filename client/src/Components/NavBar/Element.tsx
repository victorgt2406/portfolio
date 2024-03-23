// DEPRECATED

import { Link } from "react-router-dom";

type MyProps = {
    title: string;
    link?: string;
    onClick?: () => void;
    icon?: JSX.Element;
};

// Button and Link at the same time, to make sure to hace same style.
export default function Element(props: MyProps) {
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
            <div className="a a-nolink" onClick={onClick}>
                {element}
            </div>
        );
    }
}
