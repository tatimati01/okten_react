import React from 'react';
import {Link} from "react-router-dom";

import css from '../../App.module.css'

const NavBar = () => {
    return (
        <div className={css.navbar}>
            <h1><Link to={'/users'}>Users</Link></h1>
            <h1><Link to={'/posts'}>Posts</Link></h1>
        </div>
    );
};

export default NavBar;