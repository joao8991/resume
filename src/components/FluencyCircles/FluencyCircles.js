import { useContext } from "react";
import { ThemeContext } from "../../App";

const FluencyCircles = (props) => {

    const { blue } = useContext(ThemeContext);

    const TOTAL_COUNT = 5;
    const referenceArray = Array(TOTAL_COUNT).fill(1).fill(0, props.positives);

    const renderCircle = (positive) => (
        <div style={{background: blue }} className={`circle${positive ? ' positive':''}`}></div>
    )

    return <>
        {referenceArray.map(value => renderCircle(value))}
    </>
}

export default FluencyCircles;