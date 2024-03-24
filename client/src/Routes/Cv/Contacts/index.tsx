import Contact from "./Contact";


export default function Contacts() {
    return (
        <div className="d-flex justify-content-center">
            <Contact icon={<i className="bi bi-phone"></i>} content="+34 656593435"/>
            <Contact icon={<i className="bi bi-envelope-at"></i>} content="victorgt2406@gmail.com"/>
            <Contact icon={<i className="bi bi-github"></i>} content="victorgt2406"/>
        </div>
    );
}