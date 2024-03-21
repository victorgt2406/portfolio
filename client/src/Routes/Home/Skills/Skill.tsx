import { motion } from "framer-motion";

type MyProps = {
    title: string;
    index: number;
    icon: string
};

export default function Skill({ title, index, icon }: MyProps) {
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
            className="px-2 me-2 d-flex align-items-center"
        >
            <span className="pe-1">{title}</span>
            <img src={icon} style={{
                height: "30px"
            }}/>
        </motion.div>
    );
}
