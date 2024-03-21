import { useContext, useState } from "react";
import Context from "../../../utils/Context";
import Label from "./Label";
import Skill from "./Skill";
import { AnimatePresence, motion } from "framer-motion";

type SkillType = {
    title: string;
    icon: string;
    labels: string[];
};

export default function Skills() {
    const context = useContext(Context);
    const skillsObj = context.cv.skills;
    const labels = skillsObj.flatMap((skill) => skill.labels);
    const uniqLabels = Array.from(new Set(labels)).sort();
    const [filterLabels, setFilterLabels] = useState<string[]>([]);

    const handleSetLabel = (label: string) => {
        if (!filterLabels.includes(label))
            setFilterLabels([...filterLabels, label]);
        else
            setFilterLabels([
                ...filterLabels.filter((filterLabel) => filterLabel != label),
            ]);
    };
    let skills: SkillType[] = skillsObj;
    if (filterLabels.length >= 1) {
        skills = Array.from(
            new Set(
                filterLabels.flatMap((filterlabel) =>
                    skillsObj.filter((skill) =>
                        skill.labels.includes(filterlabel)
                    )
                )
            )
        );
    }
    skills.sort((a, b) => a.title.localeCompare(b.title));
    return (
        <div>
            <h2>Compentencias</h2>
            {/* Labels */}
            <div className="d-flex flex-wrap justify-content-center">
                {uniqLabels.map((uniqLabel, index) => (
                    <Label
                        key={index}
                        title={uniqLabel}
                        setLabel={handleSetLabel}
                        isSelected={filterLabels.includes(uniqLabel)}
                    >
                        {uniqLabel}
                    </Label>
                ))}
            </div>
            {/* skills */}
            <motion.div layout className="d-flex flex-wrap" initial={false}>
                {skills.map((skill, index) => (
                    <AnimatePresence key={skill.title}>
                        <Skill
                            key={skill.title + index}
                            title={skill.title}
                            index={index}
                            icon={skill.icon}
                        />
                        
                    </AnimatePresence>
                ))}
            </motion.div>
        </div>
    );
}
