import Position from "./Position";


type MyProps = {
    company: string;
    image: string;
    positions: Array<{
        title: string;
        description: string[];
        skills: string[];
    }>;
    start: string;
    end: string;
};


export default function Experience({ image, company, start, end, positions:poss }: MyProps) {

    const positions = poss.map((pos)=><Position {...pos}/>)
    const startDate = new Date(start);
    const endDate = new Date(end);
    return (
        <div className="experience">
            <div className="d-flex w-100 align-items-center justify-content-between">
                <div className="d-flex align-items-center p-2">
                    <img
                        style={{
                            height: "80px",
                            width: "80px"
                        }}
                        src={image}
                        className="pe-2"
                    />
                    <div className="ps-2 fs-5 fw-bold">{company}</div>
                </div>
                <div className="d-flex justify-content-end p-2 fst-italic fw-lighter">
                    <div className="pe-2">{(startDate.getMonth()+1).toString().padStart(2,"0")}/{startDate.getFullYear()}</div>
                    -
                    <div className="ps-2">{(endDate.getMonth()+1).toString().padStart(2,"0")}/{endDate.getFullYear()}</div>
                </div>
            </div>
            <div>
                {...positions}
            </div>
        </div>
    );
}