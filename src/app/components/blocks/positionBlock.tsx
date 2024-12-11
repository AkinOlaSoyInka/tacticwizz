export function positionBlock(title: string, secondaryPosition: Array<string>, abbreviation: string){

    return(
        <div className="blockContainer">
            <h2 className="blockTitle">Name: {title}</h2>
            <div className="blockContent"> Secondary Names: {secondaryPosition.join(', ')}</div>
            <div className="blockContent"> Abbreviations: {abbreviation}</div>
        </div>
    );
}