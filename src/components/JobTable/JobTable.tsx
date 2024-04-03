import { useState, useEffect } from "react";
import { Button, Popover, Table, Text, Select } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

interface TableContent {
  jobTitle: string;
  companyName: string;
  location: string;
  appStatus: string;
  jobType?: string;
  appDate?: string;
  method?: string;
  description?: string;
  url?: string;
  jobSalary?: string;
  companyContact?: string;
  interviewDate?: string;
  interviewNotes?: string;
  followUp?: string;
  addtionalNotes?: string;
}

export const JobTable = (): JSX.Element => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [elements, setElements] = useState<TableContent[]>([
    {
      jobTitle: "software engineer",
      companyName: "Google",
      location: "CA",
      appStatus: "Pending",
    },
    {
      jobTitle: "backend software developer",
      companyName: "Facebook",
      location: "SF",
      appStatus: "Phone screen scheduled",
    },
    {
      jobTitle: "frontend engineer",
      companyName: "Codesmith",
      location: "NY",
      appStatus: "Technical interview scheduled",
    },
    {
      jobTitle: "fullstack engineer",
      companyName: "Salesforce",
      location: "SF",
      appStatus: "Ghosted",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "gold";
      case "Phone screen scheduled":
        return "blue";
      case "Technical interview scheduled":
        return "green";
      case "Ghosted":
        return "red";
      default:
        return "gray";
    }
  };

  const handlePencilClick = (index: number) => {
    setEditingIndex(index === editingIndex ? null : index);
  };

  const handleStatusChange = (value: string, index: number) => {
    const updatedElements = [...elements];
    updatedElements[index].appStatus = value;
    setElements(updatedElements);
    setEditingIndex(null);
  };

  // Changing the status
  useEffect(() => {
    setEditingIndex(editingIndex !== null ? null : editingIndex);
    console.log("SAVED: ", elements);
  }, [elements]);

  const rows = elements.map((element, i) => (
    <Table.Tr
      key={i}
      style={{ cursor: "pointer" }}
    >
      <Table.Td>{element.jobTitle}</Table.Td>
      <Table.Td>{element.companyName}</Table.Td>
      <Table.Td>{element.location}</Table.Td>
      <Table.Td>
        {editingIndex === i ? (
          <Popover>
          <Select
            key={i}
            value={element.appStatus}
            onChange={(value: string) => handleStatusChange(value, i)}
            data={[
              "Pending",
              "Phone screen scheduled",
              "Technical interview scheduled",
              "Ghosted",
            ]}
            allowDeselect={false}
          />
          </Popover>
        ) : (
          <Text c={getStatusColor(element.appStatus)}>{element.appStatus}</Text>
        )}
      </Table.Td>
      {/* PENCIL EDIT BUTTON */}
      <Table.Td>
        {/* Fix icon size to change dynamically with window */}
        <Button c="gray" size="md" variant="transparent" onClick={() => handlePencilClick(i)}>
          <IconPencil width='50%' height='auto'/>
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Job Title</Table.Th>
          <Table.Th>Company Name</Table.Th>
          <Table.Th>Location</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Update</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
