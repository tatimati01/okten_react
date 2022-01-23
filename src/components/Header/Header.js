import React from 'react';
import css from "../../App.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <h1><Link to={'/users'}>Users</Link></h1>
                <h1><Link to={'/posts'}>Posts</Link></h1>
            </div>
        </div>
    );
};

export default Header;