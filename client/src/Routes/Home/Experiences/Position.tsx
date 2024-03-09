

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
            <div className="ps-2 d-flex justify-content-start align-items-center w-100">
                {...skills.map((skill, index) => <><span className="text-center fw-light" key={index}>{skill}</span>{index===skills.length-1?"":<div className="me-2">, </div>}</>)}
            </div>
        </div>
    );
}