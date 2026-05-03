import React from "react";
import { Badge, Divider, Stack, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { DemoBlock } from "../components/DemoBlock.js";
import { PropsTable, type PropRow } from "../components/PropsTable.js";
import {
  stackVertical,
  stackVerticalCode,
  stackHorizontal,
  stackHorizontalCode,
  gridTwoCols,
  gridTwoColsCode,
  gridThreeCols,
  gridThreeColsCode,
  cardBasic,
  cardBasicCode,
  sectionBasic,
  sectionBasicCode,
  splitBasic,
  splitBasicCode,
} from "../examples/layout.js";

const importCode = `import { stack, grid, card, section, split } from "@openmockup/dsl";`;

const stackProps: PropRow[] = [
  { name: "direction", type: '"vertical" | "horizontal"', required: true, description: "Flow direction of children." },
  { name: "children",  type: "[LayoutNode, ...]",         required: true, description: "At least one child node." },
  { name: "gap",       type: "number",                                    description: "Spacing step in px between children. Default 8." },
];

const gridProps: PropRow[] = [
  { name: "columns",  type: "number (1–12)",  required: true, description: "Number of equal-width columns." },
  { name: "children", type: "[LayoutNode, ...]", required: true, description: "At least one child node." },
];

const cardProps: PropRow[] = [
  { name: "title",   type: "TextValue",   required: true, description: "Card header text." },
  { name: "content", type: "ContentValue", required: true, description: "Body — single node or array of nodes." },
];

const sectionProps: PropRow[] = [
  { name: "title",   type: "TextValue",   required: true, description: "Section heading." },
  { name: "content", type: "ContentValue", required: true, description: "Body content." },
];

const splitProps: PropRow[] = [
  { name: "left",  type: "LayoutNode", required: true, description: "Left pane content." },
  { name: "right", type: "LayoutNode", required: true, description: "Right pane content." },
  { name: "ratio", type: "number",                     description: "Fraction of width for the left pane (exclusive of 0 and 1). Default 0.5." },
];

export function LayoutPage() {
  return (
    <Stack gap="xl">
      <div>
        <Badge mb="xs" variant="light" color="teal" size="sm">Layout</Badge>
        <Title order={1} mb="xs">Layout</Title>
        <Text c="dimmed" size="lg">
          Structural nodes that arrange children on the page: <code>stack</code>, <code>grid</code>,
          {" "}<code>card</code>, <code>section</code>, and <code>split</code>.
        </Text>
      </div>

      <Divider />

      <div>
        <Text fw={600} mb="xs">Import</Text>
        <CodeHighlight code={importCode} language="typescript" />
      </div>

      <Divider />

      {/* ── Stack ── */}
      <div>
        <Title order={2} mb="lg">Stack</Title>
        <DemoBlock title="Vertical"   doc={stackVertical}   code={stackVerticalCode} />
        <DemoBlock title="Horizontal" doc={stackHorizontal} code={stackHorizontalCode} />
        <Title order={3} mt="lg" mb="sm">Stack props</Title>
        <PropsTable rows={stackProps} />
      </div>

      <Divider />

      {/* ── Grid ── */}
      <div>
        <Title order={2} mb="lg">Grid</Title>
        <DemoBlock title="2 columns" doc={gridTwoCols}   code={gridTwoColsCode} />
        <DemoBlock title="3 columns" doc={gridThreeCols} code={gridThreeColsCode} />
        <Title order={3} mt="lg" mb="sm">Grid props</Title>
        <PropsTable rows={gridProps} />
      </div>

      <Divider />

      {/* ── Card ── */}
      <div>
        <Title order={2} mb="lg">Card</Title>
        <DemoBlock title="Basic card" doc={cardBasic} code={cardBasicCode} />
        <Title order={3} mt="lg" mb="sm">Card props</Title>
        <PropsTable rows={cardProps} />
      </div>

      <Divider />

      {/* ── Section ── */}
      <div>
        <Title order={2} mb="lg">Section</Title>
        <DemoBlock title="Basic section" doc={sectionBasic} code={sectionBasicCode} />
        <Title order={3} mt="lg" mb="sm">Section props</Title>
        <PropsTable rows={sectionProps} />
      </div>

      <Divider />

      {/* ── Split ── */}
      <div>
        <Title order={2} mb="lg">Split</Title>
        <DemoBlock title="30 / 70 split" doc={splitBasic} code={splitBasicCode} />
        <Title order={3} mt="lg" mb="sm">Split props</Title>
        <PropsTable rows={splitProps} />
      </div>
    </Stack>
  );
}
