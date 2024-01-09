export default function Project() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src="https://i.pinimg.com/originals/8c/97/d2/8c97d27b9fff8d200a0cd11ebb21525f.jpg"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <p>Project Example</p>
                <a
                    className=""
                    data-bs-toggle="collapse"
                    href={`#project${1}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`project${1}`}
                >
                    View more
                </a>
                <div className="collapse" id={`project${1}`}>
                    <div>
                        Some placeholder content for the collapse component.
                        This panel is hidden by default but revealed when the
                        user activates the relevant trigger.
                    </div>
                </div>
            </div>
        </div>
    );
}
