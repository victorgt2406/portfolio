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

    const scale = 0.98;

    return (
        <motion.div
            whileHover={{ scale }}
            transition={{ duration: 0.075 }}
            className={`m-2 btn badge rounded-pill ${isSelected?"text-bg-primary":"text-bg-dark"} fs-5`}
            onClick={() => setLabel(title)}
        >
            {children}
        </motion.div>
    );
}
