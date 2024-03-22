import NavBar from "../../Components/NavBar";
import Presentation from "../../Components/Presentation";
import ContactInfo from "./ContactInfo";

export default function Contact() {
    return (
        <div className="container">
            <NavBar />
            <Presentation />
            <div className="d-flex flex-column align-items-end pe-3">
                <ContactInfo
                    icon={<i className="bi bi-envelope-at-fill"></i>}
                    info={"victorgt2406@gmail.com"}
                />
                <ContactInfo
                    icon={<i className="bi bi-linkedin"></i>}
                    info={"https://www.linkedin.com/in/victor-gutierrez-tovar"}
                />
                <ContactInfo
                    icon={<i className="bi bi-github"></i>}
                    info={"https://github.com/victorgt2406"}
                />
                <hr className="w-100" />
                <div
                    className="w-100 my-3"
                    dangerouslySetInnerHTML={{
                        __html: `
                    <style>
                    .responsive-iframe {
                        width: 100%;
                        border: none;
                        height: 800px; 
                    }
                    @media (max-width: 768px) {
                        .responsive-iframe {
                            /* Height for mobile devices */
                            height: 1100px;
                        }
                    }
                    </style>

                    <iframe class="responsive-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSdAa6IL_1Lt5p-VDgjYixQKfgHJ1VtZP0imn8uhi49SNIjfoQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

                    <script>
                    function adjustIframeHeight() {
                    var iframe = document.querySelector('.responsive-iframe');
                    // Check if the device's viewport width is less than or equal to 768px, considered mobile
                    if (window.innerWidth <= 768) {
                        // Height for mobile devices
                        iframe.style.height = "1100px";
                    } else {
                        // Height for desktop
                        iframe.style.height = "800px";
                    }
                    }
                    window.addEventListener('load', adjustIframeHeight);
                    window.addEventListener('resize', adjustIframeHeight);
                    </script>
                  `,
                    }}
                />
            </div>
        </div>
    );
}
