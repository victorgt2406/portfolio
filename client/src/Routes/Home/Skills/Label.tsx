import { motion } from "framer-motion";
import { ReactNode } from "react";

type MyProps = {
    isSelected: boolean;
    children: ReactNode;
    title: string;
    setLabel: (label: string) => void;
};

export default function Label({
    children,
    title,
    setLabel,
    isSelected,
}: MyProps) {
    const backgroundColor = isSelected
        ? "var(--bs-primary)"
        : "var(--bs-secondary)";

    const hoverColor = "var(--bs-primary)";


    const scale = 0.95;

    return (
        <motion.div
            whileHover={{ backgroundColor: hoverColor, scale }}
            style={{ backgroundColor: backgroundColor }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`m-2 btn badge rounded-pill text-white fs-5`}
            onClick={() => setLabel(title)}
        >
            {children}
        </motion.div>
    );
}
