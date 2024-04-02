import React from 'react';
import styles from './MainContainer.module.scss';
import { Outlet, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';

const MainContainer = (): JSX.Element => {
  return (
    <div>
      <nav className={styles.navBar}>
        {/* LOGO */}
        <NavLink to='/' className={styles.logoDiv}>
          <h1>Job Journey</h1>
          <img
							className={styles.logo}
							src={Logo}
							alt='job-journey-logo'
							width='45'
							height='45'>
          </img>
        </NavLink>
        <div className={styles.switch}>
          <button style={{ backgroundColor: 'red', color: 'white' }}>SWEETCH</button>
        </div>
      </nav>
      <Outlet/>
    </div>
  )
}

export default MainContainer;