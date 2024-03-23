import { ReactNode } from "react";

type MyProps = {
    title: string;
    icon: ReactNode;
};


export default function NavElement({icon, title}:MyProps) {
    return (
        <div style={{fontSize: "13px"}} className="px-2 d-flex align-items-center">
            {icon}
            <div className="ps-2" >{title}</div>
        </div>
    );
}
