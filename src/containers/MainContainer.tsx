import styles from "./MainContainer.module.scss";
import { Outlet } from "react-router-dom";
import {
  Blockquote,
  Button,
  GridCol,
  Grid,
  Stack,
} from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { NavBar } from "../components/NavBar/NavBar";
import { JobModal } from "../components/JobModal/JobModal";

const MainContainer = (): JSX.Element => {
  const { toggleColorScheme } = useMantineColorScheme();
  return (
    <>
      <NavBar />
      {/* Grid and GridCol with certain span allows us to separate left column from main column */}
      <Grid className={styles.grid}>
        <GridCol span={3}>
          {/* Stack any elements vertically */}
          <Stack>
            <div className={styles.switch}>
              <button style={{ backgroundColor: "red", color: "white" }}>
                SWEETCH
              </button>
            </div>
            <Blockquote color="blue" cite="– Forrest Gump" mt="xl">
              Life is like an npm install – you never know what you are going to get
            </Blockquote>
            <Blockquote color="blue" cite="– Jin" mt="xl">
              Quan's resume is the best
            </Blockquote>
          </Stack>
          
        </GridCol>
        <GridCol span={9}>
          <div className={styles.jobSection}>
            <Button
              variant="light"
              color="pink"
              onClick={() => toggleColorScheme()}
            >
              THEME
            </Button>
          
          <JobModal />
          </div>
        </GridCol>
        <Outlet />
      </Grid>
    </>
  );
};

export default MainContainer;
