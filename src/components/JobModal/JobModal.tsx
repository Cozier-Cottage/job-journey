import React from "react";
import { Modal, TextInput, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export const JobModal: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div>
      <Modal opened={opened} onClose={close}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          {/* Good example. See 'getInputProps'; Can validate input, etc.
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          /> */}
          {/* Search with auto-complete? */}
          <TextInput
            withAsterisk
            label="Job Title"
            placeholder="e.g. Backend Software Developer, Fullstack Engineer..."
          />
          {/* Search with auto-complete? */}
          <TextInput
            withAsterisk
            label="Company Name"
            placeholder="Apple, Amazon, Codesmith..."
          />
          {/* Search with auto-complete? */}
          <TextInput
            withAsterisk
            label="Job Location"
            placeholder="e.g. remote, San Francisco, New York..."
          />
          {/* Make this a calendar? */}
          <TextInput
            withAsterisk
            label="Application Date"
            placeholder="MM/DD/YYYY"
          />
          {/* Make this a dropdown of choices? */}
          <TextInput
            withAsterisk
            label="Application Status"
            placeholder="e.g. No response, Technical interview scheduled..."
          />
          <TextInput
            label="Method"
            placeholder="e.g. online, email, company website..."
          />
          {/* Give two options to either paste link or put in description */}
          <TextInput
            label="Job Description"
            placeholder="TO BE REPLACED"
          />
          {/* Redundant? Combine with previous? Can also add form.getInputProps to check if valid link */}
          <TextInput
            label="Job URL"
            placeholder="URL link to job listing"
          />
          {/* Make into a dropdown? */}
          <TextInput
            label="Job Salary"
            placeholder="e.g. undisclosed, amount in dollars..."
          />
          {/* What do we want this to be? */}
          <TextInput
            label="Company Contact"
            placeholder="contact@email.com"
          />
          {/* Can potentially hold all relevant dates here. Calendar instead of text? */}
          <TextInput
            label="Interview Date"
            placeholder="MM/DD/YYYY"
          />
          {/* Can potentially select from the Interview Dates and add notes for each? */}
          <TextInput
            label="Interview Notes"
            placeholder="e.g. algo interview, brush up on binary search and sorting"
          />
          {/* What do we want this to be? */}
          <TextInput
            label="Follow-Up Actions"
            placeholder="e.g. Thank you email sent..."
          />
          <TextInput
            label="Additional Notes"
            placeholder="e.g. quick response time, tech stack..."
          />


          {/* <Checkbox
            mt="md"
            label="I agree to sell privacy + soul (mine)"
            {...form.getInputProps("termsOfService", {
              type: "checkbox",
            })}
          /> */}
          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>
      <Button onClick={open}>CLICKMEEEE</Button>
    </div>
  );
};
