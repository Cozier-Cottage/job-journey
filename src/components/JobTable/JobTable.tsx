import { Table } from '@mantine/core';


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

export const JobTable = (): JSX.Element  => {
  const elements: TableContent[] = [
    { jobTitle: 'software engineer', companyName: 'Google', location: 'CA', appStatus: 'Pending' }, 
    { jobTitle: 'backend software developer', companyName: 'Facebook', location: 'SF', appStatus: 'Phone screen scheduled' }, 
    { jobTitle: 'frontend engineer', companyName: 'Codesmith', location: 'NY', appStatus: 'Technical interview scheduled' }
  ];

  const rows = elements.map((element, i) => (
    <Table.Tr key={i}>
      <Table.Td>{element.jobTitle}</Table.Td>
      <Table.Td>{element.companyName}</Table.Td>
      <Table.Td>{element.location}</Table.Td>
      <Table.Td style={element.appStatus === 'Pending' ? {color: 'gold'} : {}}>{element.appStatus}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Job Title</Table.Th>
          <Table.Th>Company Name</Table.Th>
          <Table.Th>Location</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}