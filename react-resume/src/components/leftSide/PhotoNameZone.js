import { useState } from 'react';
import MyName from './MyName';
import RoundedPhoto from './RoundedPhoto';

const PhotoNameZone = (props) => {

    //https://freefrontend.com/css-image-effects/
    const photos = [
        ["/eu-1.png", ""],
        ["/eu-2.jpg", "running"],
    ]
    const [currentPhotoOrder, setCurrentPhotoOrder] = useState(0); 

    const changePhotoHandler = (value) => {
        const newPhotoOrder = currentPhotoOrder + value;

        if (newPhotoOrder >= photos.length ){
            setCurrentPhotoOrder(0)
        } else if (newPhotoOrder < 0 ){
            setCurrentPhotoOrder(photos.length-1)
        } else {
            setCurrentPhotoOrder(newPhotoOrder)
        }
    }

    return <>
        <RoundedPhoto
            currentPhoto={photos[currentPhotoOrder][0]}
            changePhotoHandler={changePhotoHandler}
        ></RoundedPhoto>
        <MyName doingWhat={photos[currentPhotoOrder][1]}>João Nunes</MyName>
    </>;
}

export default PhotoNameZone;