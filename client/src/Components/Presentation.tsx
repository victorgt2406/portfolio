import { useContext } from "react";
import cvPhoto from "../assets/cv_photo.png";
import Context from "../utils/Context";

type BestSkillsProps = {
    name: string;
    icon: JSX.Element;
};

function BestSkills(props: BestSkillsProps) {
    return (
        <div className="d-flex p-1 fs-7 col-sm col-12 opacity-75 align-items-center w-100">
            <div className="me-2">{props.name}</div>
            <div className="">{props.icon}</div>
        </div>
    );
}

export default function Presentation() {
    const { cv, lang } = useContext(Context);

    const cvPhotoSize = 170;
    const bestSkills: JSX.Element[] = [
        <BestSkills
            name={lang.teamWork}
            icon={<i className="bi bi-people-fill"></i>}
        />,
        <BestSkills
            name={lang.communication}
            icon={<i className="bi bi-megaphone-fill"></i>}
        />,
        <BestSkills
            name={lang.resolver}
            icon={<i className="bi bi-wrench-adjustable"></i>}
        />,
    ];

    return (
        <div className="d-flex justify-content-between flex-wrap-reverse w-100 py-2">
            {/* Nombre y resumen */}
            <div className="col-sm-8 col-12 d-flex flex-column justify-content-center">
                {/* nombre */}
                <h1 className="mb-4">{cv.presentation.fullname}</h1>
                {/* resumen */}
                <h4>{cv.presentation.brief}</h4>
                {/* skills */}
                <div className="d-flex flex-wrap">
                    {...bestSkills}
                </div>
            </div>
            {/* imagen */}
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
