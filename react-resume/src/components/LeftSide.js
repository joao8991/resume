const LeftSide = (props) => {

    const { appColor } = props;

    const line = (text) => <li className="text-size-h4">{text}</li>;

    return (<div className="col-8">
        <h2 className="fst-italic text-gray">Experience</h2>
        <h3 className="fw-bold">Game Developer</h3>
        <div className="d-flex">
            <h4>Freelancer</h4>
            <h4 className="ms-1 fw-light">2015 - Present</h4>
        </div>
        <ul>
            {line("Creativity, game theory, and development")}
            <li className="text-size-h4">{'Most successful games '}
                <a style={{ color: appColor }} className="text-decoration-none fw-bold" target="_blank" href="https://www.kongregate.com/games/joao8991/computer-evolution" rel="noreferrer">
                    Computer Evolution
                </a>
                {' and '}
                <a style={{ color: appColor }} className="text-decoration-none fw-bold" target="_blank" href="https://www.kongregate.com/games/joao8991/braincreator" rel="noreferrer">
                    Brain Creator
                </a>
            </li>
            {line("More than 1 million users playing")}
            {line("HTML, javascript, JQuery and CSS")}
        </ul>
        <h3 className="fw-bold">Full stack developer</h3>
        <div className="d-flex">
            <h4>Volkswagen Digital Solutions</h4>
            <h4 className="ms-1 fw-light">July 2019 - Present</h4>
        </div>
        <ul>
            {line("Agile team developing a marketplace that allows the users to install truck features over-the-air")}
            {line("Backend technical challenge of data transfer between many teams")}
            {line("Implementation of responsive React components with communication async with the backend")}
            {line("Participate in UI/UX brainstormings and problem solving meetings")}
            {line("Regular Scrum meetings to organize and refine team sprints")}
            {line("Tech used: React, Java(with Spring), Node.js, Docker, AWS(for data transfer and deploy), Kafka, Cypress")}
        </ul>

        <h2 className="fst-italic text-gray">Education</h2>
        <h3 className="fw-bold">BSc Computer Science</h3>
        <div className="d-flex">
            <h4>Faculty of Science of University of Lisbon</h4>
            <h4 className="ms-1 fw-light">2016-20</h4>
        </div>
        <ul>
            {line("Object Oriented Programming, Algorithms and Data Structures, Distributed Systems, Databases, Computer Theory, Security, Computer Networks")}
            {line("Artificial intelligence, Logic, Calculus, Linear Algebra")}
        </ul>

    </div>)
}

export default LeftSide;