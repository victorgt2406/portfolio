type SkillType = {
    title: string;
    icon: JSX.Element;
    labels: string[];
};

function Skill({ icon, title }: Omit<SkillType, "labels">) {
    return (
        <div className="d-flex flex-column align-items-center p-3">
            <div className="h3">{icon}</div>
            <div>{title}</div>
        </div>
    );
}

export default function SkillsDeprecated() {
    const skills: SkillType[] = [
        {
            title: "Team work",
            icon: <i className="bi bi-people-fill"></i>,
            labels: ["soft skills"],
        },
        {
            title: "Engagement",
            icon: <i className="bi bi-people-fill"></i>,
            labels: ["soft skills"],
        },
    ];

    const skillsElements = skills.map((skill) => (
        <Skill {...skill} key={skill.title} />
    ));

    return (
        <div className="my-3 w-100">
            <h2>Skills</h2>
            <div className="d-flex justify-content-start">
                <Skill
                    title={"skill1"}
                    icon={<i className="bi bi-braces-asterisk"></i>}
                />
                <Skill
                    title={"skill2"}
                    icon={<i className="bi bi-braces-asterisk"></i>}
                />
                {...skillsElements}
            </div>
        </div>
    );
}
