import IconLink, { IconLinkType } from "../IconLink";

export default function ({
    title,
    description,
    links,
}: {
    title: string;
    description: string;
    links: IconLinkType[];
}) {
    return (
        <div className="carousel-item">
            <div className="d-flex justify-content-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"
                    className="col-xs-8 col"
                    height={"375px"}
                />
                <div className="col-xs-4 col d-flex flex-column ps-3 p-2">
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
