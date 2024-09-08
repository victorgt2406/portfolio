import NavElement from "./NavElement";
import { ReactNode } from "react";

type MyProps = {
    title: string;
    icon: ReactNode;
    onClick: ()=>void;
}

export default function NavDropdownItem( {title, icon, onClick}:MyProps) {
    return (
        <div className="dropdown-item link-primary text-center" onClick={onClick}>
            <NavElement title={title} icon={icon}/>
        </div>
    );
}