import NavElement from "./NavElement";
import { ReactNode } from "react";

type MyProps = {
    title: string;
    icon: ReactNode;
    onClick: ()=>void;
}

export default function NavBtn( {title, icon, onClick}:MyProps) {
    return (
        <button className="btn btn-sm btn-primary px-0 py-0 mx-1" onClick={onClick}>
            <NavElement title={title} icon={icon}/>
        </button>
    );
}