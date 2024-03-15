import Microlink from "@microlink/react";

type MyProps = {
    children: string;
};

export default function EmbedUrl({ children }: MyProps) {
    if (children == "") {
        return <></>;
    }

    return (
    <Microlink url={children} className={"embed-url col"} />
    );
}
