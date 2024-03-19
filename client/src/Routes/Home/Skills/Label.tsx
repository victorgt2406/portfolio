import { ReactNode } from "react";

type MyProps = {
    isSelected: boolean;
    children: ReactNode;
    title: string;
    setLabel: (label:string)=>void
}

export default function Label ({children, title, setLabel, isSelected}: MyProps) {
    return (
        <div className={`m-2 btn badge rounded-pill ${isSelected?"text-bg-primary":"text-bg-secondary"} fs-5`} onClick={()=>setLabel(title)}>{children}</div>
    );
}