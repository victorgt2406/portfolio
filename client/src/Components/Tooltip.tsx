import { motion } from "framer-motion";
import React, { useState, useRef } from "react";

interface TooltipProps {
    children: React.ReactNode;
    content: string;
    placement?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({
    children,
    content,
    placement = "bottom",
}: TooltipProps) {
    const [show, setShow] = useState(false);
    const targetRef = useRef<HTMLSpanElement>(null);

    return (
        <span
            ref={targetRef}
            className="d-inline-block"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            // Accessibility considerations
            tabIndex={0} // Makes the span focusable
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
        >
            {children}
            {show && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.65 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className={`tooltip bs-tooltip-${placement} show`}
                    role="tooltip"
                    style={{ position: "absolute", zIndex: 1080, opacity: 0.8 }} // Adjust positioning as needed
                >
                    <div className="tooltip-inner text-white">{content}</div>
                </motion.div>
            )}
        </span>
    );
}
