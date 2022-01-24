import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <h1><NavLink to={'/'}>Home</NavLink></h1>
                <h1><NavLink to={'/users'}>Users</NavLink></h1>
                <h1><NavLink to={'/posts'}>Posts</NavLink></h1>
            </div>
        </div>
    );
};

export default Header;