type MyProps = {
    description: string[];
    skills: string[];
};

export default function Description({
    description,
    skills,
}: MyProps) {
    const descriptionElements = description.map((desc, index) => (
        <li key={index} className="my-1 fw-light">
            {desc}
        </li>
    ));

    return (
        <div className="d-flex flex-column" style={{fontSize: "12px"}}>

            <div className="ps-1">
                <ul>{...descriptionElements}</ul>
            </div>
            <div className="mt-1 d-flex justify-content-start align-items-center w-100 flex-wrap">
                <span className="me-2">Skills:</span>
                {...skills.map((skill, index) => (
                    <>
                        <span
                            className="text-center fw-light fst-italic"
                            key={index}
                        >
                            {skill}
                        </span>
                        {index === skills.length - 1 ? (
                            ""
                        ) : (
                            <div className="me-2">, </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
}
