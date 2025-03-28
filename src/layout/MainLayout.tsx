import Sidebar from '../components/sidebar/Sidebar';
import HeaderBar from '../components/header/HeaderBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';


const MainLayout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <HeaderBar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
