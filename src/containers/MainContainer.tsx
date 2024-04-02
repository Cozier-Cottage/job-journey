import React from "react";
import styles from "./MainContainer.module.scss";
import { Outlet, NavLink } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Button, Burger } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import Logo from "../assets/Logo.jpg";

const MainContainer = (): JSX.Element => {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <NavLink to="/" className={styles.logoLink}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <span className={styles.logoText}>Job Journey</span>
          </NavLink>
        </div>
        <div className={styles.navLinkContainer}>
          <Button
              variant="outline"
              color={colorScheme === 'dark' ? "indigo" : 'white'}
              onClick={() => toggleColorScheme()}
              size="xs"
            >
              {colorScheme}
          </Button>
          <NavLink to="/application" className={styles.navLink}>
            Application History
          </NavLink>
          <NavLink to="/resume" className={styles.navLink}>
            Resume
          </NavLink>
          <NavLink to="/profile" className={styles.navLink}>
            Profile
          </NavLink>
        </div>
        <Burger
          className={styles.burger}
          color="red"
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
      </nav>
      <Outlet />
    </div>
  );
};

export default MainContainer;
