import { Education } from "../../types/CVtypes";
import Location from "../Location";
import Year from "./Year";

export default function Experience({
    icon,
    company,
    location,
    years,
}: Education) {
    return (
        <div className="card">
            <div className="d-flex w-100 align-items-start justify-content-between">
                <img
                    style={{
                        height: "50px",
                    }}
                    className="rounded-1"
                    src={icon}
                />
                <div className="w-100 d-flex flex-column ps-2">
                    <div className="d-flex justify-content-between w-100 fs-6">
                        <div className="fw-bold">{company}</div>
                        <Location location={location} className="fst-italic mx-2"/>
                    </div>
                    <ul className="d-flex flex-column w-100 m-0 mt-1">
                        {years.map((year, index) => (
                            <li>
                                <Year key={index} {...year} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
