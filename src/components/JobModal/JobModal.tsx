import React, { useState } from "react";
import { Modal, TextInput, Button, Group, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { DateInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import { TableContent } from '../../ui-types.d.ts';

interface JobModalProps {
  open: () => void;
  close: () => void; 
  form: any;
  opened: boolean;
  elements: TableContent[]; 
  setElements: () => void;
}

export const JobModal: React.FC = ({ open, close, form, opened, elements, setElements }: JobModalProps) => {
  const [date, setDate] = useState<Date | null>(null);
  
  const handleSubmit = (values: TableContent) => {
    const newElements: TableContent[] = [...elements];
    console.log("NEW ELEMENT BEFORE ", newElements);
    newElements.push(values);
    console.log("NEW ELEMENT AFTER ", newElements);
    setElements(newElements);
  }

  return (
    <div>
      <Modal opened={opened} onClose={close}>
        <form onSubmit={form.onSubmit((values) => {
          console.log(values);
          handleSubmit(values);
          close();
        })}>
          {/* Good example. See 'getInputProps'; Can validate input, etc.
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          /> */}
          {/* JOB TITLE */}
          <TextInput
            withAsterisk
            required={true}
            label="Job Title"
            placeholder="e.g. Backend Software Developer, Fullstack Engineer..."
            {...form.getInputProps("jobTitle")}
          />
          {/* COMPANY NAME */}
          <TextInput
            withAsterisk
            required={true}
            label="Company Name"
            placeholder="Apple, Amazon, Codesmith..."
            {...form.getInputProps("companyName")}
          />
          {/* LOCATION */}
          <TextInput
            withAsterisk
            required={true}
            label="Job Location"
            placeholder="e.g. remote, San Francisco, New York..."
            {...form.getInputProps("location")}
          />
          {/* APP STATUS */}
          <Select
            withAsterisk
            required={true}
            label="Application Status"
            placeholder="e.g. No response, Technical interview scheduled..."
            defaultValue="Pending"
            data={[
              "Pending",
              "Phone screen scheduled",
              "Technical interview scheduled",
              "Ghosted",
            ]}
            allowDeselect={false}
            {...form.getInputProps("appStatus")}
          />
          {/* JOB TYPE */}
          <Select
            withAsterisk
            required={true}
            label="Job Type"
            defaultValue="Unknown"
            placeholder="e.g. Onsite, Remote, Hybrid"
            data={[
              "Unknown",
              "Onsite",
              "Remote",
              "Hybrid",
            ]}
            allowDeselect={false}
            {...form.getInputProps("jobType")}
          />
          {/* APP DATE */}
          <DateInput   
            withAsterisk
            required={true}
            clearable
            label="Pick date"
            placeholder="Pick date"
            value={date}
            onChange={setDate} 
            {...form.getInputProps("appDate")}
          />
          {/* METHOD */}
          <TextInput
            required={false}
            label="Method"
            placeholder="e.g. online, email, company website..."
            {...form.getInputProps("method")}
          />
          {/* DESCRIPTION */}
          <TextInput
            required={false}
            label="Job Description"
            placeholder="TO BE REPLACED"
            {...form.getInputProps("description")}
          />
          {/* URL */}
          <TextInput
            required={false}
            label="Job URL"
            placeholder="URL link to job listing"
            {...form.getInputProps("url")}
          />
          {/* SALARY */}
          <TextInput
            required={false}
            label="Job Salary"
            placeholder="e.g. undisclosed, amount in dollars..."
            {...form.getInputProps("jobSalary")}
          />
          {/* COMPANY CONTACT */}
          <TextInput
            required={false}
            label="Company Contact"
            placeholder="contact@email.com"
            {...form.getInputProps("companyContact")}
          />
          {/* INTERVIEW DATE */}
          <TextInput
            required={false}
            label="Interview Date"
            placeholder="MM/DD/YYYY"
            {...form.getInputProps("interviewDate")}
          />
          {/* INTERVIEW NOTES */}
          <TextInput
            required={false}
            label="Interview Notes"
            placeholder="e.g. algo interview, brush up on binary search and sorting"
            {...form.getInputProps("interviewNotes")}
          />
          {/* FOLLOW UP */}
          <TextInput
            required={false}
            label="Follow-Up Actions"
            placeholder="e.g. Thank you email sent..."
            {...form.getInputProps("followUp")}
          />
          {/* ADDITIONAL NOTES */}
          <TextInput
            required={false}
            label="Additional Notes"
            placeholder="e.g. quick response time, tech stack..."
            {...form.getInputProps("addtionalNotes")}
          />

          {/* <Checkbox
            mt="md"
            label="I agree to sell privacy + soul (mine)"
            {...form.getInputProps("termsOfService", {
              type: "checkbox",
            })}
          /> */}
          <Group justify="center" mt="md">
          <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>
    </div>
  );
};
