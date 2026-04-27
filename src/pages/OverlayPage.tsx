import React from "react";
import { Alert, Badge, Divider, Stack, Text, Title } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { CodeHighlight } from "@mantine/code-highlight";
import { DemoBlock } from "../components/DemoBlock.js";
import { PropsTable, type PropRow } from "../components/PropsTable.js";
import {
  modalBasic,
  modalBasicCode,
  drawerRight,
  drawerRightCode,
  popoverBasic,
  popoverBasicCode,
} from "../examples/overlays.js";

const importCode = `import { modal, drawer, popover } from "@open-mockup/dsl";`;

const modalProps: PropRow[] = [
  { name: "title",   type: "TextValue",  required: true, description: "Modal header text." },
  { name: "content", type: "LayoutNode", required: true, description: "Body content (single node)." },
];

const drawerProps: PropRow[] = [
  { name: "side",    type: '"left" | "right"', required: true, description: "Which edge the drawer slides in from." },
  { name: "content", type: "LayoutNode",       required: true, description: "Drawer body content." },
];

const popoverProps: PropRow[] = [
  { name: "content", type: "LayoutNode", required: true, description: "Popover body content." },
];

export function OverlayPage() {
  return (
    <Stack gap="xl">
      <div>
        <Badge mb="xs" variant="light" color="grape" size="sm">Overlays</Badge>
        <Title order={1} mb="xs">Overlays</Title>
        <Text c="dimmed" size="lg">
          Overlay nodes — <code>modal</code>, <code>drawer</code>, and <code>popover</code>.
          In wireframe mode they render as dashed panels to indicate their position in the layout.
        </Text>
      </div>

      <Alert icon={<IconInfoCircle size={16} />} color="blue" variant="light">
        Overlays are static in the wireframe renderer. Trigger logic (open/close) is implemented
        by the host application using action refs.
      </Alert>

      <Divider />

      <div>
        <Text fw={600} mb="xs">Import</Text>
        <CodeHighlight code={importCode} language="typescript" />
      </div>

      <Divider />

      {/* ── Modal ── */}
      <div>
        <Title order={2} mb="lg">Modal</Title>
        <DemoBlock title="Confirmation dialog" doc={modalBasic} code={modalBasicCode} />
        <Title order={3} mt="lg" mb="sm">Modal props</Title>
        <PropsTable rows={modalProps} />
      </div>

      <Divider />

      {/* ── Drawer ── */}
      <div>
        <Title order={2} mb="lg">Drawer</Title>
        <DemoBlock title="Right-side form drawer" doc={drawerRight} code={drawerRightCode} />
        <Title order={3} mt="lg" mb="sm">Drawer props</Title>
        <PropsTable rows={drawerProps} />
      </div>

      <Divider />

      {/* ── Popover ── */}
      <div>
        <Title order={2} mb="lg">Popover</Title>
        <DemoBlock title="Info popover" doc={popoverBasic} code={popoverBasicCode} />
        <Title order={3} mt="lg" mb="sm">Popover props</Title>
        <PropsTable rows={popoverProps} />
      </div>
    </Stack>
  );
}
