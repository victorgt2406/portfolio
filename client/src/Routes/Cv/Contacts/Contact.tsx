import { ReactNode } from "react";


type MyProps = {
    icon: ReactNode;
    content: string;
};

export default function Contact ({icon, content}:MyProps) {
    return (
        <div className="d-flex mx-2">
            <span className="me-2">{icon}</span>
            <span>{content}</span>
        </div>
    );
}