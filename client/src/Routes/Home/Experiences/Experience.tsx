

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


export default function Experience({ image, company, start, end }: MyProps) {
    return (
        <div className="d-flex">
            <div className="d-flex">
                <img src={image}/>
                <div>{company}</div>
            </div>

            <div className="d-flex">
                <div>{start}</div>
                <div>{end}</div>
            </div>
        </div>
    );
}