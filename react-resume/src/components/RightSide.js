const RightSide = (props) => {

    const { appColor } = props;
    const renderCircle = (positive) => {
        return <div style={{background: appColor }} className={`circle${positive ? ' positive':''}`}></div>
    }
    
    return (<div className="col-4">
        <h2 className="fst-italic text-gray">Tech & Skills</h2>
        <div className="d-flex flex-wrap">
            {["React", "Java", "Javascript", "UX/UI", "Kafka", "AWS", "Docker", "HTML", "CSS", "Bootstrap", "SQL", "Python", "Git", "Cypress"]
            .map(tech => <div className="text-size-h5 tech">{tech}</div>)}
        </div>
        <h2 className="fst-italic text-gray">Languages</h2>
        <div className="d-flex">
            <h4 className="flex-grow-1">Portuguese</h4>
            {[1,1,1,1,1].map(value => renderCircle(value))}
        </div>
        <div className="d-flex">
            <h4 className="flex-grow-1">English</h4>
            {[1,1,1,1,0].map(value => renderCircle(value))}
        </div>
        <div className="d-flex">
            <h4 className="flex-grow-1">Spanish</h4>
            {[1,1,1,1,0].map(value => renderCircle(value))}
        </div>

    </div>)
}

export default RightSide;