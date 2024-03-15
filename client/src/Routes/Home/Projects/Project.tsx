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
    const img = links[0].link
    const alt = links[0].title
    

    return (
        <div className="card">
            <img
                src={img}
                className="card-img-top"
                alt={alt}
                style={{
                    height: "400px",
                    width: "auto",
                    objectFit: "scale-down"
                }}
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
