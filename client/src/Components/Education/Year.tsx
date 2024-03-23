import Dates from "../Dates";

type MyProps = {
    start: string;
    end: string;
    title: string;
    honors: string[];
};

export default function Year({ title, start, end, honors }: MyProps) {
    return (
        <div className="w-100 d-flex justify-content-between">
            <div>
                <span className="me-2">{title}</span>
                <span className="fw-light ms-2">{honors}</span>
            </div>
            <div className="d-flex justify-content-end fst-italic fw-lighter">
                <Dates {...{ start, end }} />
            </div>
        </div>
    );
}
