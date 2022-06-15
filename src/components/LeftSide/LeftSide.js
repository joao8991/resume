import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Line } from "../Line/Line";

const LeftSide = () => {

    const { blue } = useContext(ThemeContext);

    return (<div className="col-8">
        <h2 className="fst-italic text-gray">Experience</h2>
        <h3 className="fw-bold mb-1" style={{color: blue}}>Game Developer</h3>
        <div className="d-flex">
            <h4>Freelancer</h4>
            <h4 className="ms-1 fw-light">2015 - Present</h4>
        </div>
        <ul>
            <Line>Creativity, game theory, and development</Line>
            <li className="text-size-h4">{'Most successful games '}
                <a className="text-decoration-none fw-500" target="_blank" href="https://www.kongregate.com/games/joao8991/computer-evolution" rel="noreferrer">
                    Computer Evolution
                </a>
                {' and '}
                <a className="text-decoration-none fw-500" target="_blank" href="https://www.kongregate.com/games/joao8991/braincreator" rel="noreferrer">
                    Brain Creator
                </a>
            </li>
            <Line>More than 1 million users playing</Line>
            <Line>HTML, javascript, JQuery and CSS</Line>
        </ul>
        <h3 className="fw-bold mb-1" style={{color: blue}}>Full stack developer</h3>
        <div className="d-flex">
            <h4>Volkswagen Digital Solutions</h4>
            <h4 className="ms-1 fw-light">July 2019 - Present</h4>
        </div>
        <ul>
            <Line>Agile team developing a marketplace that allows the users to install truck features over-the-air</Line>
            <Line>Backend technical challenge of data transfer between many teams and data lakes</Line>
            <Line>Implementation of responsive React components with communication async with the backend</Line>
            <Line>Participate in UI/UX brainstormings and problem solving meetings</Line>
            <Line>Regular Scrum meetings to organize and refine team sprints</Line>
            <Line>Tech used: React, Java(with Spring), Node.js, Docker, AWS(data transfer, lambdas and deployment), Kafka, Cypress</Line>
        </ul>

        <h2 className="fst-italic text-gray">Education</h2>
        <h3 className="fw-bold mb-1">BSc Computer Science</h3>
        <div className="d-flex">
            <h4>Faculty of Science of University of Lisbon</h4>
            <h4 className="ms-1 fw-light">2016-20</h4>
        </div>
        <ul>
            <Line>Object Oriented Programming, Algorithms and Data Structures, Distributed Systems, Databases, Computer Theory, Security, Computer Networks</Line>
            <Line>Artificial intelligence, Logic, Calculus, Linear Algebra</Line>
        </ul>

    </div>)
}

export default LeftSide;