import { Link } from "react-router-dom";
import NavElement from "./NavElement";
import { ReactNode } from "react";

type MyProps = {
    to: string;
    title: string;
    icon: ReactNode
}

export default function NavLink({to, title, icon}:MyProps) {
    return (
        <Link to={to} className="py-2">
            <NavElement title={title} icon={icon}/>
        </Link>
    );
}