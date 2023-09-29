import cvPhoto from "../assets/cv_photo.png";

type BestSkillsProps = {
    name: string;
    icon: JSX.Element;
};

function BestSkills(props: BestSkillsProps) {
    return (
        <div className="d-flex p-2 h6 col-sm col-6 text-secondary">
            <div className="pe-2">{props.name}</div>
            <div>{props.icon}</div>
        </div>
    );
}

export default function () {
    const cvPhotoSize = 170;
    const bestSkills: JSX.Element[] = [
        <BestSkills name="TeamWork" icon={<i className="bi bi-people-fill"></i>} />,
        <BestSkills name="Engagement" icon={<i className="bi bi-megaphone-fill"></i>} />,
        <BestSkills name="Professionalism" icon={<i className="bi bi-person-raised-hand"></i>}/>
    ];

    return (
        <div className="d-flex justify-content-between flex-wrap-reverse">
            <div className="col-sm-8 col-12 d-flex flex-column justify-content-center p-3">
                <h1 className="mb-4">Víctor Gutiérrez Tovar</h1>
                <h2>Ingeniero Software en busca de practicas</h2>
                <div className="d-flex align-items-center flex-wrap ps-3">{...bestSkills}</div>
            </div>
            <div className="col-sm-4 col-12 d-flex justify-content-center align-items-center">
                <img
                    src={cvPhoto}
                    style={{
                        height: `${cvPhotoSize}px`,
                        width: `${cvPhotoSize}px`,
                        borderRadius: "100px",
                    }}
                />
            </div>
        </div>
    );
}
