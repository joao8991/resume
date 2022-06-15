import './Page.scss';
import LeftSide from '../LeftSide/LeftSide';
import Info from '../Info/Info';
import RightSide from '../RightSide/RightSide';
const Page = () => {
    
    return <div className="page-holder">
        <div className="page">
            <h2 className="name">João Nunes</h2>
            <Info/>
            <div className="row">
                <LeftSide/>
                <RightSide/>
            </div>
            <h6 className="footer-note">This resume was made by me with ReactJS</h6>
        </div>
    </div>
}

export default Page;