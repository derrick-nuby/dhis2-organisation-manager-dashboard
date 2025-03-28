import React from 'react';
import menuLinks from './../../data/menuLinks';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <section>
            <div className={`${styles.homeSection}`}>
                {menuLinks.map((menuItem, index) => (
                    <Link key={index} to={menuItem.link} className={`${styles.navSection}`}>
                        <div className={`${styles.navItems}`}>
                            <img src="https://avatars.githubusercontent.com/u/1089987" alt={menuItem.name} className={`${styles.navImg}`} />
                            <p className={`${styles.navItemName}`}>{menuItem.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Home;
