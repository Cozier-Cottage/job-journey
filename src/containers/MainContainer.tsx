import React from "react";
import styles from "./MainContainer.module.scss";
import { Outlet, NavLink } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Button, Burger, Text } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import Logo from "../assets/Logo.jpg";

const MainContainer = (): JSX.Element => {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div>
      <nav className={colorScheme === 'dark' ? styles.navbar : styles.navbarLight}>
        <div className={styles.logoContainer}>
          <NavLink to="/" className={styles.logoLink}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <span className={styles.logoText}>
              <Text fs="italic" size="lg" c={colorScheme === 'dark' ? 'white' : 'black'}>Job Journey</Text>
            </span>
          </NavLink>
        </div>
        <div className={styles.navLinkContainer}>
          <Button
            variant="outline"
            color={colorScheme === "dark" ? "indigo" : "#b08e17"}
            onClick={() => toggleColorScheme()}
            size="xs"
          >
            {colorScheme}
          </Button>
          <NavLink
            to="/application"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            <Text size="md" c={colorScheme === 'dark' ? 'white' : 'black'}>Application History</Text>
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            <Text size="md" c={colorScheme === 'dark' ? 'white' : 'black'}>Resume</Text>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            <Text size="md" c={colorScheme === 'dark' ? 'white' : 'black'}>Profile</Text>
          </NavLink>
        </div>
        <Burger
          className={styles.burger}
          color={colorScheme === 'dark' ? 'white' : 'black'}
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
      </nav>
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainer;
