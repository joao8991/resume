import { useState } from 'react';
import './Page.scss';
import LeftSide from './LeftSide';
import Info from './Info';
import RightSide from './RightSide';

const Page = () => {
    
    const [leftColumnBackgroundColor] = useState("#4082bf");


    return <div className="page-holder">
        <div className="page">
            <h2 className="name">João Nunes</h2>
            <Info/>
            <div className="row">
                <LeftSide appColor={leftColumnBackgroundColor}/>
                <RightSide appColor={leftColumnBackgroundColor}/>
            </div>
            <h6 className="footer-note">This resume was made with ReactJS</h6>
        </div>
    </div>
}

export default Page;