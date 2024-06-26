import Presentation from "../../Components/Presentation";
import Experiences from "../../Components/Experiences";
import Education from "../../Components/Education";
import style from "./style";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Contacts from "./Contacts";
import CvProjectDetails from "./CvProjectDetails";
import Skills from "./Skills";
import Languages from "./Languages";

const Cv = forwardRef((_props, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);

    // Use useImperativeHandle to expose the DOM element you want to print
    useImperativeHandle(ref, () => ({
        // This object will be merged with the ref passed to Cv
        getPrintableElement: () => internalRef.current, // Assuming this is the element you want to print
    }));

    return (
        <div className="mx-4 my-1" ref={internalRef}>
            <div dangerouslySetInnerHTML={{ __html: style }} />
            <Presentation />
            <Contacts />
            <Skills/>
            <Experiences />
            <Education />
            <Languages/>
            <CvProjectDetails />
        </div>
    );
});

export default Cv;
