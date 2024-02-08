import React from 'react';

const Menu = ({ onMenuButtonClick, basicArray, updateBasicArray }) => {

    const handleChange = (index, field, value) => {
        updateBasicArray(index, field, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="pop-up" id="popup">
            <div className="pop-up-container">
                <h3>Réglage</h3>
                <form onSubmit={handleSubmit}>
                    {basicArray.map((item, index) => (
                        <div key={index}>
                            <label htmlFor={`sec-${index}`}>Sec :</label>
                            <input
                                type="number"
                                id={`sec-${index}`}
                                value={item.min * 60}
                                onChange={(e) => handleChange(index, 'min', parseFloat(e.target.value) / 60)}
                            />
                        </div>
                    ))}
                </form>
                <i className="far fa-times-circle" id="closeBtn" onClick={onMenuButtonClick}></i>
            </div>
        </div>
    );
};

export default Menu;
