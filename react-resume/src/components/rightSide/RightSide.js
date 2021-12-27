const RightSide = () => {

    const title = (leftText, rightText) => (
        <>
            <h3 className="flex-grow-1 fw-bold">{leftText}</h3>
            <h4 className="right-dates text-end fw-light">{rightText}</h4>
        </>
    )
    
    const line = (text) => <li className="text-size-h4">{text}</li>;

    return (<div className="mb-2">
        <h2 className="fw-bold">Experience</h2>
        <div className="d-flex">
            {title("Recreational Game dev", "2015-Forever")}
        </div>
        <ul>
            {line("Creativity, game theory, and development")}
            {line("Biggest works: Computer Evolution and Brain creator")}
            {line("Computer evolution has 700k on Kongregate")}
            {line("Brain Creator has 250k plays and was the 9th best game of the month on Kongregate")}
        </ul>
        <div className="d-flex">
            {title("Full stack developer", "2019-Present")}
        </div>
        <h4 className="col-12">Volkswagen Digital Solutions</h4>
        <ul>
            {line("Work in a small team developing a web-app where users")}
        </ul>
        <h2 className="fw-bold">Education</h2>
        <div className="d-flex">
            {title("BSc Computer Science", "2016-2020")}
        </div>
        <h5 className="col-12 text-uppercase">faculty of science of university of lisbon</h5>
    </div>)
}

export default RightSide;