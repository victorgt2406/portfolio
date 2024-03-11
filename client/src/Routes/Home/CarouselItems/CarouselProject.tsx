import IconLink, { IconLinkType } from "../../../Components/IconLink";

export default function CarouserProject({
    title,
    description,
    links,
    active = false,
}: {
    title: string;
    description: string;
    links: IconLinkType[];
    active?: boolean;
}) {
    return (
        <div className={`carousel-item${active ? " active" : ""}`}>
            <div className="justify-content-center row">
                {/* 16:9 pictures */}
                <img
                    src="https://i.pinimg.com/originals/8c/97/d2/8c97d27b9fff8d200a0cd11ebb21525f.jpg"
                    className="col-md-8 col"
                />
                <div className="col-md-4 col d-flex flex-column ps-3 p-2">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="mt-auto">
                        {...links.map((link) => <IconLink {...link} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}
