import React, { useRef, useState } from "react";
import NavBtn from "../NavBtn";
import Cv from "../../../Routes/Cv";
import { useReactToPrint } from "react-to-print";

const NavBtnPrintCV: React.FC = () => {
    const componentRef = useRef<React.ReactInstance | null>(null);
    const [isPrinting, setIsPrinting] = useState(false); // State to control visibility during printing

    const handlePrint = useReactToPrint({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        content: () => componentRef.current.getPrintableElement(),
        onBeforePrint: () => setIsPrinting(true), // Make the component visible before printing
        onAfterPrint: () => setIsPrinting(false), // Hide the component after printing
    });

    return (
        <>
            <NavBtn
                title={"CV"}
                icon={<i className="bi bi-file-earmark-arrow-down-fill"></i>}
                onClick={handlePrint}
            />
            <div style={{ display: isPrinting ? "block" : "none" }} >
                <Cv ref={componentRef}/>
            </div>
        </>
    );
}

export default NavBtnPrintCV;
