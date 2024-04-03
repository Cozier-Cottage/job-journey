import { useState, useEffect } from "react";
import {
  Button,
  Table,
  Text,
  Select,
  useMantineColorScheme,
  Modal,
  Tooltip,
} from "@mantine/core";
import { IconPencil, IconDots } from "@tabler/icons-react";
import { TableContent } from "../../ui-types.d.ts";
import { JobModal } from "../JobModal/JobModal.tsx";

interface JobTableProps {
  open: () => void;
  close: () => void; 
  form: any;
  opened: boolean;
  elements: TableContent[];
  setElements: (argo0:any) => void;
  search: string;
}

export const JobTable = ({
  open,
  close,
  form,
  elements,
  setElements,
  search,
}: JobTableProps): JSX.Element => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [rows, setRows] = useState<React.JSX.Element[]>([]);
  const [openedModals, setOpenedModals] = useState<boolean[]>(
    new Array(elements.length).fill(false)
  );
  const { colorScheme } = useMantineColorScheme();
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return colorScheme === "dark" ? "gold" : "#b08e17";
      case "Phone screen scheduled":
        return "blue";
      case "Technical interview scheduled":
        return colorScheme === "dark" ? "#cf9fff" : "violet";
      case "Ghosted":
        return "red";
      case "Offer made":
        return colorScheme === "dark" ? "green" : "#17b061";
      default:
        return "gray";
    }
  };

  const handlePencilClick = (index: number) => {
    setEditingIndex(editingIndex === index ? null : index);
  };

  const handleStatusChange = (value: string, index: number) => {
    const updatedElements = [...elements];
    updatedElements[index].appStatus = value;
    setElements(updatedElements);
    setEditingIndex(null);
  };

  useEffect(() => {
    setRows([]);
    const newElements = !search
      ? elements
      : elements.filter((element) =>
          element.companyName.toLowerCase().startsWith(search.toLowerCase())
        );
    const newRows = newElements.map((element, i) => (
      <Table.Tr key={i} style={{ cursor: "pointer" }}>
        <Table.Td>
          <Text size="lg">{element.jobTitle}</Text>
        </Table.Td>
        <Table.Td>
          <Text size="lg">{element.companyName}</Text>
        </Table.Td>
        <Table.Td>
          <Text size="lg">{element.location}</Text>
        </Table.Td>
        <Table.Td>
          {editingIndex === i ? (
            <Select
              key={i}
              value={element.appStatus}
              onChange={(value: string) => handleStatusChange(value, i)}
              data={[
                "Pending",
                "Phone screen scheduled",
                "Technical interview scheduled",
                "Ghosted",
                "Offer made",
              ]}
              allowDeselect={false}
            />
          ) : (
            <Text size="lg" c={getStatusColor(element.appStatus)}>
              {element.appStatus}
            </Text>
          )}
        </Table.Td>
        {/* PENCIL EDIT BUTTON */}
        <Table.Td
          style={{
            width: "10%",
            padding: 0,
          }}
        >
          {/* Fix icon size to change dynamically with window */}
          <Tooltip label="Update Status" color="gray">
            <Button
              c="gray"
              size="md"
              variant="transparent"
              onClick={() => handlePencilClick(i)}
            >
              <IconPencil width="50%" height="auto" />
            </Button>
          </Tooltip>
          {/* MODAL */}
          <Modal
            key={i}
            overlayProps={{
              backgroundOpacity: 0.55,
              blur: 3,
            }}
            yOffset="15vh"
            xOffset={0}
            radius={20}
            opened={openedModals[i]}
            onClose={() =>
              setOpenedModals(new Array(elements.length).fill(false))
            }
            size="50rem"
            title={
              <div style={{ display: "flex", alignItems: "center" }}>
                <Text size="xl" style={{ flexGrow: 1 }}>
                  Additional Info
                </Text>
                <Tooltip label="Update Details" color="gray">
                  <Button
                    variant="transparent"
                    c="gray"
                    onClick={() => {
                      // Open editing and close current modal
                      setOpenedModals(new Array(elements.length).fill(false));
                      open();
                    }}
                  >
                    <IconPencil />
                  </Button>
                </Tooltip>
              </div>
            }
          >
            {Object.keys(element).map((prop, i) => {
              console.log(`ELement: ${JSON.stringify(element)}`);
              return (
                <Text key={i}>
                  <span
                    style={
                      colorScheme === "light"
                        ? { color: "#360374" }
                        : { color: "#927bad" }
                    }
                  >
                    {prop}
                  </span>
                  {` - ${element[prop]}`}
                </Text>
              );
            })}
          </Modal>
          <Tooltip label="See More" color="gray">
            <Button
              key={`b-${i}`}
              onClick={() =>
                setOpenedModals((prevState) => {
                  const newState = [...prevState];
                  newState[i] = !newState[i];
                  return newState;
                })
              }
              variant="transparent"
              c="gray"
            >
              <IconDots />
            </Button>
          </Tooltip>
        </Table.Td>
      </Table.Tr>
    ));
    setRows(newRows);
  }, [
    search,
    elements,
    editingIndex,
    colorScheme,
    openedModals,
    // getStatusColor,
  ]);

  return (
    <Table striped>
      <Table.Thead>
        <Table.Tr
          style={
            colorScheme === "light"
              ? { color: "#360374" }
              : { color: "#927bad" }
          }
        >
          <Table.Th>
            <Text size="lg">Job Title</Text>
          </Table.Th>
          <Table.Th>
            <Text size="lg">Company Name</Text>
          </Table.Th>
          <Table.Th>
            <Text size="lg">Location</Text>
          </Table.Th>
          <Table.Th>
            <Text size="lg">Status</Text>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
