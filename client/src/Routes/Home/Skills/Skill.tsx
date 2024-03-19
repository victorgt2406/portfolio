import { motion } from "framer-motion";

type MyProps = {
    title: string;
};

export default function Skill({ title }: MyProps) {
    return (
        <motion.div
            className="me-2"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
                duration: 0.2,
                ease: "easeInOut",
            }}
        >
            {title}
        </motion.div>
    );
}
