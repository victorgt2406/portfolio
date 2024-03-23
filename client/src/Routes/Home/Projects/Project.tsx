import { useEffect, useRef, useState } from "react";
import EmbedUrl from "../../../Components/EmbedUrl";

type Link = {
    title: string;
    url: string;
};

type MyProps = {
    id: string;
    title: string;
    description: string;
    img: string;
    links: Link[];
};

export default function Project({
    id,
    title,
    description,
    links,
    img,
}: MyProps) {
    const [isMore, setMore] = useState(false);
    const collapseElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const collapseElement = collapseElementRef.current;

        // Function to call when collapse is shown/hidden
        const onCollapseEnd: EventListenerOrEventListenerObject = (event) => {
            // Update state based on the action
            setMore(event.type === "shown.bs.collapse");
            console.log(event);
        };

        if (collapseElement) {
            // Listen for collapse events
            collapseElement.addEventListener(
                "hidden.bs.collapse",
                onCollapseEnd
            );
            collapseElement.addEventListener(
                "shown.bs.collapse",
                onCollapseEnd
            );
        }

        // Clean up the event listeners
        return () => {
            if (collapseElement) {
                collapseElement.removeEventListener(
                    "hidden.bs.collapse",
                    onCollapseEnd
                );
                collapseElement.removeEventListener(
                    "shown.bs.collapse",
                    onCollapseEnd
                );
            }
        };
    }, []);

    const links_elements = links.map((link, index) => (
        <EmbedUrl key={index}>{link.url}</EmbedUrl>
    ));

    return (
        <div className="card">
            <h3>{title}</h3>
            <img
                src={`${process.env.NODE_ENV !== "production" ? "" : "/portfolio"}${img}`}
                className="card-img-top"
                alt={`${title} image`}
                style={{
                    maxHeight: "600px",
                    width: "100%",
                    objectFit: "scale-down",
                }}
            />
            <h4 className="mt-3 ms-2">Links</h4>
            <div>{...links_elements}</div>
            <div className="card-body">
                
                
                <a
                    className="mt-3"
                    data-bs-toggle="collapse"
                    href={`#project${id}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`project${id}`}
                >
                    {isMore ? "Read less" : "Read more"}
                </a>
                <div
                    className="collapse"
                    id={`project${id}`}
                    ref={collapseElementRef}
                >
                    <div
                        className="lh-lg text-justify"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
