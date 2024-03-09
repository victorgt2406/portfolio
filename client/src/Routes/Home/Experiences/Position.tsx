

type MyProps = {
    title: string;
    description: string[];
    skills: string[];
}


export default function Position({ title, description, skills }: MyProps) {
    return (
        <div className="d-flex flex-column">
            <div className="ps-2">{title}</div>
            <div className="ps-2">{...description}</div>
            <div className="ps-2">
                <ul>
                    {...skills.map((skill) => <li>{skill}</li>)}
                </ul>
            </div>
        </div>
    );
}