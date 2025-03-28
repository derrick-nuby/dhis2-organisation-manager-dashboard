import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import menuLinks from './../../data/menuLinks';

const Sidebar = () => {
    return (
        <aside className={`${styles.sidebar}`}>
            <div>
                <ul className={`${styles.menuLinks}`}>

                    {menuLinks.map((menuItem, index) => (
                        <li key={index}>
                            <NavLink
                                className={({ isActive }) => isActive ? `${styles.linkDefault} ${styles.active}` : `${styles.linkDefault}`}
                                to={menuItem.link}
                            >
                                {menuItem.name}
                            </NavLink>
                        </li>
                    ))}
                </ul >
            </div >
        </aside >
    );
};

export default Sidebar;