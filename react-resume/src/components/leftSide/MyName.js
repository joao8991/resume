import './MyName.scss';

const MyName = (props) => {
    const { children, doingWhat } = props;
    
    return <div>
        {/* {doingWhat && <h5 >{doingWhat}</h5>} */}
        <h2 className={`text-size-h1 text-center name fw-bolder`}>{children}</h2>
    </div>;
}

export default MyName;