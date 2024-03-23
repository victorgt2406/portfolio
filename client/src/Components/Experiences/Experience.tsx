import Dates from "../Dates";
import Location from "../Location";
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
    return (
        <div className="card">
            <div className="d-flex w-100 align-items-start justify-content-between fs-5">
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
                    <Location location={location} className="fst-italic fw-bold"/>
                    <div className="d-flex justify-content-end fst-italic fw-lighter">
                        <Dates {...{start, end}}/>
                    </div>
                </div>
            </div>
            <Description {...position } />
        </div>
    );
}
