import React from 'react';


export const LOGO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5uv7QTp8TwmP5eDDUk8p3gJAO-Hjswj5fA&s'

const Header = () => {
    return (
        <header className='Header'>
            <img src={LOGO} alt="какая-то картинка"/>
        </header>
    );
};

export default Header;


