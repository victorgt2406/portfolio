import Position from "./Position";

type MyProps = {
    company: string;
    image: string;
    positions: {
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
    positions,
    location
}: MyProps) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    return (
        <div className="card my-1">
            <div className="d-flex w-100 align-items-start justify-content-between">
                <div className="d-flex align-items-start">
                    <img
                        style={{
                            height: "80px",
                        }}
                        className="rounded-4"
                        src={image}
                    />
                    <div className="ms-2">
                        <Position {...{ company, ...positions }} />
                    </div>
                </div>
                <div className="d-flex flex-column align-items-end">
                    <div className="">{location}</div>
                    <div className="d-flex justify-content-end p-2 fst-italic fw-lighter">
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
        </div>
    );
}
