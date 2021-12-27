import './RoundedPhoto.scss';

const RoundedPhoto = (props) => {
    const { currentPhoto, changePhotoHandler } = props;

    //https://freefrontend.com/css-image-effects/
    
    return <div className="container">
            <img className="rounded-photo" alt="me" src={currentPhoto}></img>
            <div className="arrow left change-photo" onClick={() => changePhotoHandler(-1)}></div>
            <div className="arrow right change-photo" onClick={() => changePhotoHandler(-1)}></div>
            {/* <div className="arrow change-photo" onClick={() => changePhotoHandler(1)}></div> */}
        </div>;
}

export default RoundedPhoto;