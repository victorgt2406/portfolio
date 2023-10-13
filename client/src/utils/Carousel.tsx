import CarouselProject from "./CarouselItems/CarouselProject";
import IconLink, { IconLinkType } from "./IconLink";

function CarrouselItem({
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

export default function () {
    return (
            <div 
                id="carouselProjects"
                className="carousel slide w-100"
                data-bs-ride="carousel"
            >
                {/* Páginas del carusel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg
                            className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                            width="800"
                            height="400"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: First slide"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777"></rect>
                            <text x="50%" y="50%" fill="#555" dy=".3em">
                                First slide
                            </text>
                        </svg>
                    </div>
                    <div className="carousel-item">
                        <svg
                            className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                            width="800"
                            height="400"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: Second slide"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#666"></rect>
                            <text x="50%" y="50%" fill="#444" dy=".3em">
                                Second slide
                            </text>
                        </svg>
                    </div>
                    <CarrouselItem
                        title="U-tad Sports"
                        description="Mejor Aplicación Proyectos"
                        links={[
                            {
                                icon: <i className="bi bi-github"></i>,
                                link: "https://github.com/victorgt2406/f1_porra",
                            },
                        ]}
                    />
                    <CarouselProject
                        title="U-tad Sports"
                        description="Mejor Aplicación Proyectos"
                        links={[
                            {
                                icon: <i className="bi bi-github"></i>,
                                link: "https://github.com/victorgt2406/f1_porra",
                            },
                        ]}
                    />
                </div>
                {/* los botones */}
                {/* Previous */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselProjects"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                {/* Next */}
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselProjects"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    );
}
