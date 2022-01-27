import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../Header/Header";
import css from './Layout.module.css'

const Layout = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            <div className={css.footer}>
                <p>Дякуємо, що відвідали наш сайт.</p>
            </div>
        </div>
    );
};

export default Layout;