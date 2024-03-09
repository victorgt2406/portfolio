import { ReactNode, useEffect, useState } from "react";

type MyProps = {
    options: string[] | string[][];
    title?: string;
    onChange?: (option: string) => void;
};

function isStringArray(options: string[] | string[][]): options is string[] {
    return typeof options[0] === "string";
}

function List({
    children,
    setOption,
}: {
    children: string;
    setOption: (option: string) => void;
}) {
    return (
        <li>
            <a className="dropdown-item" onClick={() => setOption(children)}>
                {children}
            </a>
        </li>
    );
}

function Divider() {
    return (
        <li>
            <hr className="dropdown-divider" />
        </li>
    );
}

function Lists({
    options,
    setOption,
}: {
    options: string[];
    setOption: (option: string) => void;
}) {
    return (
        <>
            {options.map((option, i) => (
                <List key={i} setOption={setOption}>
                    {option}
                </List>
            ))}
        </>
    );
}

export default function Select({ options, title, onChange }: MyProps) {
    // set default title if title undefined
    if (title === undefined) {
        if (isStringArray(options)) {
            title = options[0];
        } else {
            title = options[0][0];
        }
    }

    useEffect(() => {
        if (title !== undefined) {
            setOption(title);
        }
    }, [title]);

    let lists: ReactNode[] = [];
    const [option, setOption] = useState<string>(title!);

    const handleOnChange = (op: string) => {
        setOption(op);
        if (onChange !== undefined) onChange(op);
    };

    // options: string[]
    if (isStringArray(options)) {
        lists = [<Lists options={options} setOption={handleOnChange} />];
    }
    // options: string[][]
    else {
        lists = options.map((options2, i) => (
            <>
                <Lists key={i} options={options2} setOption={handleOnChange} />
                {i % 2 === 0 ? <></> : <Divider key={i} />}
            </>
        ));
    }

    return (
        <div className="btn-group">
            <button
                type="button"
                className="btn btn-outline-info dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {option}
            </button>
            <ul className="dropdown-menu">{...lists}</ul>
        </div>
    );
}
