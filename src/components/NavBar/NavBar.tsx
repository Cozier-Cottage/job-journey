import React from "react";
import styles from "./NavBar.module.scss";
import { Outlet, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";

export const NavBar: React.FC = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logoContainer}>
            <NavLink to="/" className={styles.logoLink}>
              <img src={Logo} alt="Logo" className={styles.logo} />
              <span className={styles.logoText}>Job Journey</span>
            </NavLink>
          </div>
          <div className={styles.navLinks}>
            <NavLink to="/link1" className={styles.navLink}>
              Application History
            </NavLink>
            <NavLink to="/link2" className={styles.navLink}>
              Resume
            </NavLink>
            <NavLink to="/link3" className={styles.navLink}>
              Profile
            </NavLink>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
