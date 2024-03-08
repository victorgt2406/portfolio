import { useContext } from "react";
import Context from "../../../utils/Context";
import Experience from "./Experience";


export default function Experiences (){
    const context = useContext(Context);
    const Exps = context.cv.experience.map((exp, index)=><Experience key={index} {...exp}/>)

    return (
        <div className="d-flex flex-column">
            {...Exps}
        </div>
    );
}