export default function Location({ location, className }: { location: string, className?:string }) {
    return (
        <div className={className}>
            <i className="bi bi-geo-alt-fill"></i>
            {location}
        </div>
    );
}