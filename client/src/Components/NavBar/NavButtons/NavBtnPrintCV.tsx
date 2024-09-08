import React, { useRef, useState } from "react";
import NavBtn from "../NavBtn";
import Cv from "../../../Routes/Cv";
import { useReactToPrint } from "react-to-print";
import isMobile from "../../../utils/isMobile";
import NavDropdownItem from "../NavDropdownItem";

const NavBtnPrintCV: React.FC = () => {
    const componentRef = useRef<React.ReactInstance | null>(null);
    const [isPrinting, setIsPrinting] = useState(false); // State to control visibility during printing

    const handleReactPrint = useReactToPrint({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        content: () => componentRef.current.getPrintableElement(),
        onAfterPrint: () => setIsPrinting(false), // Hide the component after printing
    });

    const handlePrint = async () => {
        setIsPrinting(true);
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log("hello");
        handleReactPrint();
    };

    // return (
    //     <>
    //         <NavBtn
    //             title={"CV"}
    //             icon={<i className="bi bi-file-earmark-arrow-down-fill"></i>}
    //             onClick={handlePrint}
    //         />
    //         <div style={{ display: "none" }} >
    //             {isPrinting?<Cv ref={componentRef}/>:<></>}
    //         </div>
    //     </>
    // );

    return !isMobile() ? (
        <>
            <NavBtn title={"CV"} icon={<i className="bi bi-file-earmark-arrow-down-fill"></i>} onClick={handlePrint} />
            <div style={{ display: "none" }}>{isPrinting ? <Cv ref={componentRef} /> : <></>}</div>
        </>
    ) : (
        <>
            <NavDropdownItem
                title={"CV"}
                icon={<i className="bi bi-file-earmark-arrow-down-fill"></i>}
                onClick={handlePrint}
            />
            <div style={{ display: "none" }}>{isPrinting ? <Cv ref={componentRef} /> : <></>}</div>
        </>
    );
};

export default NavBtnPrintCV;
