import React from "react";
import { Badge, Table, Text } from "@mantine/core";

export interface PropRow {
  name: string;
  type: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  rows: PropRow[];
}

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <Table withTableBorder withColumnBorders striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Prop</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Required</Table.Th>
          <Table.Th>Description</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.map((row) => (
          <Table.Tr key={row.name}>
            <Table.Td>
              <Text size="sm" ff="monospace" fw={600}>
                {row.name}
              </Text>
            </Table.Td>
            <Table.Td>
              <Text size="xs" ff="monospace" c="indigo">
                {row.type}
              </Text>
            </Table.Td>
            <Table.Td>
              {row.required === true ? (
                <Badge size="xs" color="red" variant="light">
                  required
                </Badge>
              ) : (
                <Text size="xs" c="dimmed">
                  —
                </Text>
              )}
            </Table.Td>
            <Table.Td>
              <Text size="sm" c="dimmed">
                {row.description}
              </Text>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
