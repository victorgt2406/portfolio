import { motion } from "framer-motion";
import Tooltip from "../../../Components/Tooltip";

type MyProps = {
    title: string;
    index: number;
    icon: string;
};

export default function Skill({ title, index, icon }: MyProps) {
    const duration = 0.035;
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
            className="px-2 me-2 mt-2 d-flex align-items-center"
        >
            <Tooltip content={title}>
                <img
                    src={`${process.env.NODE_ENV !== "production" ? "" : "/portfolio"}${icon}`}
                    style={{
                        height: "30px",
                    }}
                />
            </Tooltip>
        </motion.div>
    );
}
