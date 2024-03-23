type MyProps = {
    start: string;
    end: string;
};

export default function Dates({ start, end }: MyProps) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return (
        <>
            <i className="bi bi-calendar-event me-1"></i>
            <div className="pe-1">
                {(startDate.getMonth() + 1).toString().padStart(2, "0")}/
                {startDate.getFullYear()}
            </div>
            -
            <div className="ps-1">
                {(endDate.getMonth() + 1).toString().padStart(2, "0")}/
                {endDate.getFullYear()}
            </div>
        </>
    );
}
