import React, { useState } from "react";
import Tooltip from "../../Components/Tooltip";

type MyProps = {
    icon: React.ReactNode;
    info: string;
}

export default function ContactInfo({icon, info}:MyProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(setCopied, 2000, false);
            // console.log("Text copied to clipboard");
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };
    return (
        <div className="d-flex align-items-center">
            <span className="me-2 fs-1">{icon}</span>
            <span className="fs-3 text-wrap text-break">{info}</span>
            <Tooltip content={"Copy"}>
                <button className={`ms-2 btn ${copied?"btn-success":"btn-info"}`} onClick={()=>handleCopy(info)}>
                    {copied?<i className="bi bi-check"></i>:<i className="bi bi-copy"></i>}
                </button>
            </Tooltip>
        </div>
    );
}
