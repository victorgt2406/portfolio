import NavBar from "../../Components/NavBar";
import Presentation from "../../Components/Presentation";
import ContactInfo from "./ContactInfo";

export default function Contact() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Presentation />
                <div className="d-flex flex-column align-items-end pe-3">
                    <ContactInfo
                        icon={<i className="bi bi-envelope-at-fill"></i>}
                        info={"victorgt2406@gmail.com"}
                    />
                    <ContactInfo
                        icon={<i className="bi bi-linkedin"></i>}
                        info={
                            "https://www.linkedin.com/in/victor-gutierrez-tovar"
                        }
                    />
                    <ContactInfo
                        icon={<i className="bi bi-github"></i>}
                        info={"https://github.com/victorgt2406"}
                    />
                </div>
            </div>
        </>
    );
}
