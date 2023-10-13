import CarouselProject from "./CarouselItems/CarouselProject";
import IconLink, { IconLinkType } from "./IconLink";

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
