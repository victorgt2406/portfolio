import { motion } from "framer-motion";

type MyProps = {
    title: string;
    index: number;
};

export default function Skill({ title, index }: MyProps) {
    const duration = 0.1;
    const delay = index * duration;
    return (
        <motion.div
            layout // This will handle the size adjustments smoothly
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{
                opacity: 0,
                scaleY: 0,
                transition: { duration: duration / 2 },
            }}
            transition={{
                opacity: { duration, delay },
                scaleY: { duration, delay },
            }}
            className="me-2"
        >
            {title}
        </motion.div>
    );
}
