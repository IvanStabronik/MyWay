import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <img
                    src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                    alt=""/>
            </header>
        </div>
    );
};

export default Header;