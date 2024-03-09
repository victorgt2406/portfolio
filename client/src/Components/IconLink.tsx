type IconLinkType = {
    title?: string;
    link: string;
    icon: JSX.Element;
};

export default function IconLink({ link, icon, title }: IconLinkType) {
    return (
        <a className="icon-link" href={link} target="_blank">
            {icon}
            {title === undefined ? <></> : <div className="">{title}</div>}
        </a>
    );
}

export type { IconLinkType };
