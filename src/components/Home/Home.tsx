import React from "react";
import styles from "./Home.module.scss";
import { Blockquote, Button, GridCol, Grid, Stack, Table } from "@mantine/core";
import { JobModal } from "../JobModal/JobModal";
import { JobTable } from "../JobTable/JobTable";

const Home = (): JSX.Element => {
  return (
    <Grid className={styles.grid}>
      {/* Grid and GridCol with certain span allows us to separate left column from main column */}
      <GridCol span={3}>
        {/* Stack any elements vertically */}
        <Stack>
          <Blockquote color="blue" cite="– Forrest Gump" mt="xl">
            Life is like an npm install – you never know what you are going to
            get
          </Blockquote>
          <Blockquote color="blue" cite="– Jin" mt="xl">
            Quan's resume is the best
          </Blockquote>
        </Stack>
      </GridCol>
      <GridCol span={9}>
        <div className={styles.jobSection}>
          <div>
          <JobModal />
          </div>
          {/* TABLE */}
          <JobTable />
        </div>
      </GridCol>
    </Grid>
  );
};

export default Home;
