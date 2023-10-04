export default function ({
    title,
    description,
    links,
}: {
    title: string;
    description: string;
    links: { icon: JSX.Element; link: string }[];
}) {
    return (
        <div className="carousel-item">
            <div className="d-flex justify-content-center">
                <img
                    src="http://www.w3.org/2000/svg"
                    width="800"
                    height="400"
                />
                <div className="d-flex flex-column ps-3 p-2">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="mt-auto">
                        {...links.map((link) => link.icon)}
                    </div>
                </div>
            </div>
        </div>
    );
}
