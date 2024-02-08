import React from 'react';

const Header = ({ onMenuButtonClick, onFullscreenButtonClick }) => {

    return (
        <header>
            <h1>Chrono</h1>
            <div className="header-buttons">
                <button id="fullscreen" title="Plein ecran" onClick={onFullscreenButtonClick}><i className="fa-solid fa-expand-alt"></i></button>
                <button id="menu" title="Réglage" onClick={onMenuButtonClick}><i className="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
        </header>
    );
};

export default Header;