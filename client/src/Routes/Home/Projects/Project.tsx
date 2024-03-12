type Link = {
    title: string;
    link: string;
};

type MyProps = {
    id: string;
    title: string;
    description: string;
    links: Link[];
};

export default function Project({ id, title, description, links }: MyProps) {
    return (
        <div className="card">
            <img
                src="https://i.pinimg.com/originals/8c/97/d2/8c97d27b9fff8d200a0cd11ebb21525f.jpg"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <p>{title}</p>
                <a
                    className=""
                    data-bs-toggle="collapse"
                    href={`#project${id}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`project${id}`}
                >
                    View more
                </a>
                <div className="collapse" id={`project${id}`}>
                    <div
                        className="lh-lg text-justify"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                    <div>
                        {...links.map((link, i) => (
                            <a key={i} href={link.link}>
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
