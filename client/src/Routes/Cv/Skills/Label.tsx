import { ReactNode } from "react";

type MyProps = {
    children: ReactNode;
};

export default function Label({ children }: MyProps) {
    return (
        <div
            style={{ fontSize: "14px" }}
            className={`mx-2 my-1 badge rounded-pill text-bg-light`}
        >
            {children}
        </div>
    );
}
