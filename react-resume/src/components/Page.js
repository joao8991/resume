import { useState } from 'react';
import Column from './Column';
import './Page.css';

const Page = () => {
    
    const [leftColumnWidth] = useState(40);
    const [leftColumnWidthOffsetPx, setLeftColumnWidthOffsetPx] = useState(0);
    const [leftColumnBackgroundColor] = useState("#666");

    const [isDown, setIsDown] = useState(false)
    const [offset, setOffset] = useState(0);


    const handleLeftColumnChange = (value) => {
        setLeftColumnWidthOffsetPx(leftColumnWidthOffsetPx+value)
    }

    const onMouseDown = (event) => {
        event.preventDefault();
        setOffset(event.target.offsetLeft-event.clientX)
        setIsDown(true)
    }
    const onMouseUp = (event) => {
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
                test
            </Column>
            <div className="scaler"
                style={{ left: 'calc('+leftColumnWidthOffsetPx + 'px + ' + leftColumnWidth + '%)' }}
                onMouseDown={(e) => onMouseDown(e)}
                onMouseUp={(e) => onMouseUp(e)}
                onMouseOut={(e) => onMouseUp(e)}
                onMouseMove={(e) => onMouseMove(e)}
            />
            <Column backgroundColor={"white"} width={100-leftColumnWidth} widthOffsetPx={-leftColumnWidthOffsetPx}>
                test
            </Column>
        </div>
    </div>
}

export default Page;