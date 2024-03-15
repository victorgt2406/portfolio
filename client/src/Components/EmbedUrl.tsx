import Microlink from "@microlink/react";

type MyProps = {
    children: string;
};

export default function EmbedUrl({ children }: MyProps) {
    return children == "" ? (
        <></>
    ) : (
        <Microlink url={children} className={"embed-url"} />
    );
}
