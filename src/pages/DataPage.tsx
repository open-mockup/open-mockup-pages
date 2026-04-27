import React from "react";
import { Badge, Divider, Stack, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { DemoBlock } from "../components/DemoBlock.js";
import { PropsTable, type PropRow } from "../components/PropsTable.js";
import {
  tableBasic,
  tableBasicCode,
  listBasic,
  listBasicCode,
  statGrid,
  statGridCode,
  treeBasic,
  treeBasicCode,
  mediaPlaceholders,
  mediaPlaceholdersCode,
  iconPlaceholderBasic,
  iconPlaceholderBasicCode,
} from "../examples/data.js";

const importCode = `import { table, list, stat, tree, image, iconPlaceholder, avatar, chart, map, dataSourceRef } from "@open-mockup/dsl";`;

const tableProps: PropRow[] = [
  { name: "dataSource", type: "DataSourceRef", required: true, description: "Opaque reference to a host-registered data source." },
  { name: "columns",    type: "[TextValue, ...]", required: true, description: "Column header labels (at least one)." },
];

const listProps: PropRow[] = [
  { name: "dataSource",    type: "DataSourceRef", required: true, description: "Host-registered data source." },
  { name: "itemTemplate",  type: "TextValue",     required: true, description: "Template string for each row, e.g. \"{name} — {status}\"." },
];

const statProps: PropRow[] = [
  { name: "label", type: "TextValue",      required: true, description: "Short uppercase label above the value." },
  { name: "value", type: "string | number", required: true, description: "The metric value to display." },
];

const treeProps: PropRow[] = [
  { name: "dataSource", type: "DataSourceRef", required: true, description: "Host-registered hierarchical data source." },
];

const mediaProps: PropRow[] = [
  { name: "image", type: 'Node with optional "label" and "aspectRatio"', description: "Image placeholder for mockups." },
  { name: "avatar", type: 'Node with "name" and optional "size"', description: "Avatar-like placeholder element." },
  { name: "chart", type: 'Node with optional "chartType" and "title"', description: "Chart placeholder block." },
  { name: "map", type: 'Node with optional "label"', description: "Map placeholder block." },
  { name: "iconPlaceholder", type: 'Node with required "icon"', description: "Standalone icon placeholder." },
];

export function DataPage() {
  return (
    <Stack gap="xl">
      <div>
        <Badge mb="xs" variant="light" color="orange" size="sm">Data</Badge>
        <Title order={1} mb="xs">Data</Title>
        <Text c="dimmed" size="lg">
          Nodes for displaying structured data: <code>table</code>, <code>list</code>,
          {" "}<code>stat</code>, <code>tree</code>, plus media placeholders (<code>image</code>, <code>avatar</code>, <code>chart</code>, <code>map</code>).
          Data is supplied at runtime via a
          host-registered <code>DataSourceRef</code> — the wireframe renders placeholder rows.
        </Text>
      </div>

      <Divider />

      <div>
        <Text fw={600} mb="xs">Import</Text>
        <CodeHighlight code={importCode} language="typescript" />
      </div>

      <Divider />

      {/* ── Table ── */}
      <div>
        <Title order={2} mb="lg">Table</Title>
        <DemoBlock title="Orders table" doc={tableBasic} code={tableBasicCode} />
        <Title order={3} mt="lg" mb="sm">Table props</Title>
        <PropsTable rows={tableProps} />
      </div>

      <Divider />

      {/* ── List ── */}
      <div>
        <Title order={2} mb="lg">List</Title>
        <DemoBlock title="Notification list" doc={listBasic} code={listBasicCode} />
        <Title order={3} mt="lg" mb="sm">List props</Title>
        <PropsTable rows={listProps} />
      </div>

      <Divider />

      {/* ── Stat ── */}
      <div>
        <Title order={2} mb="lg">Stat</Title>
        <DemoBlock title="Dashboard stats grid" doc={statGrid} code={statGridCode} />
        <Title order={3} mt="lg" mb="sm">Stat props</Title>
        <PropsTable rows={statProps} />
      </div>

      <Divider />

      {/* ── Tree ── */}
      <div>
        <Title order={2} mb="lg">Tree</Title>
        <DemoBlock title="Category tree" doc={treeBasic} code={treeBasicCode} />
        <Title order={3} mt="lg" mb="sm">Tree props</Title>
        <PropsTable rows={treeProps} />
      </div>

      <Divider />

      <div>
        <Title order={2} mb="lg">Media placeholders</Title>
        <DemoBlock title="Image / Avatar / Chart / Map" doc={mediaPlaceholders} code={mediaPlaceholdersCode} />
        <DemoBlock title="Icon placeholders" doc={iconPlaceholderBasic} code={iconPlaceholderBasicCode} />
        <Title order={3} mt="lg" mb="sm">Media props</Title>
        <PropsTable rows={mediaProps} />
      </div>
    </Stack>
  );
}
