import Presentation from "../../Components/Presentation";
import Experiences from "../../Components/Experiences";
import Skills from "./Skills";
import Education from "../../Components/Education";
import style from "./style";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Contacts from "./Contacts";

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
            <Contacts/>
            <Experiences />
            <Education />
            <Skills />
        </div>
    );
});

export default Cv;
