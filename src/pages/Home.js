import React, { useEffect, useState } from 'react';
import Series from '../components/Series';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Home = () => {
    const originalBasicArray = [
        { pic: 0, min: 0.5 },
        { pic: 1, min: 1 },
        { pic: 2, min: 1.5 },
        { pic: 3, min: 2 },
        { pic: 4, min: 3 },
        { pic: 5, min: 10 }
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [basicArray, setBasicArray] = useState(originalBasicArray);

    useEffect(() => {
        const storedBasicArray = localStorage.getItem('basicArray');
        if (storedBasicArray) {
            const parsedArray = JSON.parse(storedBasicArray);
            if (parsedArray.length === originalBasicArray.length) {
                setBasicArray(parsedArray);
            }
        } else {
            localStorage.setItem('basicArray', JSON.stringify(originalBasicArray));
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const updateBasicArray = (index, field, value) => {
        const updatedArray = [...basicArray];
        updatedArray[index] = { ...updatedArray[index], [field]: value };
        setBasicArray(updatedArray);
        localStorage.setItem('basicArray', JSON.stringify(updatedArray));
    };
    const handleFullscreenButtonClick = () => {
        const elementToFullscreen = document.getElementById('appContainer');
        requestFullscreen(elementToFullscreen);
    };

    const requestFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else {
            console.error('Fullscreen API is not supported');
        }
    };

    return (
        <body>
            <Header onMenuButtonClick={toggleMenu} onFullscreenButtonClick={handleFullscreenButtonClick} />
            <Series basicArray={basicArray} />
            {isOpen && <Menu onMenuButtonClick={toggleMenu} basicArray={basicArray} updateBasicArray={updateBasicArray} />}
        </body>
    );
};

export default Home;