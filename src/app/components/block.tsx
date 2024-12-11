export function Block(title: string, content: string){
    return(
        <div className="blockContainer">
            <h2 className="blockTitle">{title}</h2>
            <div className="blockContent">{content}</div>
        </div>
    );
}