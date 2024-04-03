import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import { Blockquote, Button, GridCol, Grid, Stack } from "@mantine/core";
import { JobModal } from "../JobModal/JobModal";
import { JobTable } from "../JobTable/JobTable";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { TableContent } from '../../ui-types.d.ts';
import { IconOctagonPlus } from "@tabler/icons-react";
import { SelectDropdownSearch } from './SelectDropdownSearch';

import dummyData from './dummyDatabase.tsx'

const Home = (): JSX.Element => {
  const [opened, { open, close }] = useDisclosure(false);
  const [search, setSearch] = useState<string>('');
  const form = useForm({
    initialValues: {
      jobTitle: "",
      companyName: "",
      location: "",
      appStatus: "",
      jobType: "",
      appDate: "",
      method: "",
      description: "",
      url: "",
      jobSalary: "",
      companyContact: "",
      interviewDate: "",
      interviewNotes: "",
      followUp: "",
      addtionalNotes: "",
    },
    // validate: {
    //   companyContact: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    // },
  });
  const [elements, setElements] = useState<TableContent[]>(dummyData);

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
          <JobModal close={close} form={form} opened={opened} elements={elements} setElements={setElements}/>
          {/* PLUS BUTTON */}
          <div className={styles.plusContainer}>
            <SelectDropdownSearch searchArray={elements.map(el => el.companyName)} search={search} setSearch={setSearch} firstVal={elements[0].companyName}/>
            <Button variant="transparent" c="gray"
              onClick={() => {
                form.reset();
                open();
              }}
              // style={{ marginTop: '25px'}}
            >
              <IconOctagonPlus />
            </Button>
          </div>
          
          {/* TABLE */}
          <JobTable open={open} close={close} form={form} opened={opened} elements={elements} setElements={setElements} search={search} />
        </div>
      </GridCol>
    </Grid>
  );
};

export default Home;
