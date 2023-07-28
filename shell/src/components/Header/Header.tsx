import React from 'react';
import './Header.scss'
import {useAppSelector} from "../../hooks/redux";
const Header = () => {
    const count = useAppSelector(state => state.counter.count)
    return (
        <header className="header">
            {count}
        </header>
    );
};

export default Header;