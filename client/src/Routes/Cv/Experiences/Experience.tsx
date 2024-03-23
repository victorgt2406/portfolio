import Description from "./Description";

type MyProps = {
    company: string;
    image: string;
    position: {
        title: string;
        description: string[];
        skills: string[];
    };
    start: string;
    end: string;
    location: string;
};

export default function Experience({
    image,
    company,
    start,
    end,
    position,
    location
}: MyProps) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    return (
        <div className="card my-1">
            <div className="d-flex w-100 align-items-start justify-content-between" style={{fontSize: "16px"}}>
                <div className="d-flex align-items-start">
                    <img
                        style={{
                            height: "50px",
                        }}
                        className="rounded-4"
                        src={image}
                    />
                    <div className="ms-2">
                        <div className="fw-bold">{position.title}</div>
                        <div className="fw-light">{company}</div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-end">
                    <div className="fst-italic fw-bold">{location}</div>
                    <div className="d-flex justify-content-end fst-italic fw-lighter">
                        <div className="pe-2">
                            {(startDate.getMonth() + 1)
                                .toString()
                                .padStart(2, "0")}
                            /{startDate.getFullYear()}
                        </div>
                        -
                        <div className="ps-2">
                            {(endDate.getMonth() + 1)
                                .toString()
                                .padStart(2, "0")}
                            /{endDate.getFullYear()}
                        </div>
                    </div>
                </div>
            </div>
            <Description {...position } />
        </div>
    );
}
