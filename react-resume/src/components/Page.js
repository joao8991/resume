import { useState } from 'react';
import Column from './Column';
import './Page.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons'
import RightSide from './rightSide/RightSide';
import PhotoNameZone from './leftSide/PhotoNameZone';

const Page = () => {
    
    const [leftColumnWidth] = useState(40);
    const [leftColumnWidthOffsetPx, setLeftColumnWidthOffsetPx] = useState(0);
    const [leftColumnBackgroundColor] = useState("#4082bf");

    const [isDown, setIsDown] = useState(false)
    const [offset, setOffset] = useState(0);


    const handleLeftColumnChange = (value) => {
        setLeftColumnWidthOffsetPx(leftColumnWidthOffsetPx+value)
    }

    const onMouseDown = (event) => {
        setOffset(event.target.offsetLeft-event.clientX)
        setIsDown(true)
    }
    const onMouseUp = () => {
        setIsDown(false)
    }
    const onMouseMove = (event) => {
        event.preventDefault();
        if (isDown) {
            const newOffset = event.target.offsetLeft-event.clientX;
            handleLeftColumnChange(offset-newOffset)
        }
    }

    return <div className="page-holder">
        <div className="page d-flex">
            <Column backgroundColor={leftColumnBackgroundColor} 
            width={leftColumnWidth} widthOffsetPx={leftColumnWidthOffsetPx}>
                <PhotoNameZone />
            </Column>
            {/* <div className="scaler"
                style={{ 
                    left: 'calc('+leftColumnWidthOffsetPx + 'px + ' + leftColumnWidth + '%)',
                    border: `2px solid ${leftColumnBackgroundColor}`,
                    color: leftColumnBackgroundColor
                }}
                onMouseDown={(e) => onMouseDown(e)}
                onMouseUp={(e) => onMouseUp(e)}
                onMouseOut={(e) => onMouseUp(e)}
                onMouseMove={(e) => onMouseMove(e)}
            /> */}
            <Column backgroundColor={"white"} width={100-leftColumnWidth} widthOffsetPx={-leftColumnWidthOffsetPx}>
                <RightSide />
            </Column>
        </div>
    </div>
}

export default Page;