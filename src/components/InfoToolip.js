import React from 'react';
import '../styles/Login.css';
import closeIconPath from '../images/Close-Icon.svg';

function InfoToolip({onClose, isOpen, pic, alt, infoToolipCaption}) {
    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className="popup__container" >
                <button type="button" className="popup__close-button" onClick={onClose}>
                    <img src={closeIconPath} alt="картинка закрытия окна" className="popup__close-icon"/>
                </button>
                <img className="infoToolip__img" src={pic} alt={alt} />
                <h2 className= "infoToolip__caption">{infoToolipCaption}</h2>
            </div>
        </div>
    )

}

export default InfoToolip