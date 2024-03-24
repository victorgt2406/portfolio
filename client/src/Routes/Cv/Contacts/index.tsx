import { Link } from "react-router-dom";
import Contact from "./Contact";


export default function Contacts() {
    return (
        <div className="d-flex justify-content-center">
            <Contact icon={<i className="bi bi-phone"></i>} content="+34 656593435"/>
            <Contact icon={<i className="bi bi-envelope-at"></i>} content="victorgt2406@gmail.com"/>
            <Contact icon={<i className="bi bi-globe"></i>} content={<Link target="_blank" to={"https://victorgt2406.github.io/portfolio/"}>Portfolio</Link>}/>
            <Contact icon={<i className="bi bi-linkedin"></i>} content={<Link target="_blank" to={"https://www.linkedin.com/in/victor-gutierrez-tovar/"}>victor-gutierrez-tovar</Link>}/>
            <Contact icon={<i className="bi bi-github"></i>} content={<Link target="_blank" to={"https://github.com/victorgt2406"}>victorgt2406</Link>}/>
            
        </div>
    );
}