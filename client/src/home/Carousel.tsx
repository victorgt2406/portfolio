import CarouselProject from "./CarouselItems/CarouselProject";

export default function Carousel() {
    return (
        <div
            id="carouselProjects"
            className="carousel slide w-100"
            data-bs-ride="carousel"
        >
            {/* Páginas del carusel */}
            <div className="carousel-inner">
                <CarouselProject
                    active={true}
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
