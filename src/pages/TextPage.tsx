import React from "react";
import { Badge, Divider, Stack, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { DemoBlock } from "../components/DemoBlock.js";
import { PropsTable, type PropRow } from "../components/PropsTable.js";
import {
  labelBasic,
  labelBasicCode,
  headingLevels,
  headingLevelsCode,
  paragraphBasic,
  paragraphBasicCode,
} from "../examples/text.js";

const importCode = `import { label, heading, paragraph } from "@open-mockup/dsl";`;

const labelProps: PropRow[] = [
  { name: "text", type: "TextValue", required: true, description: "Short inline text — non-empty." },
];

const headingProps: PropRow[] = [
  { name: "text",  type: "TextValue",        required: true, description: "Heading text." },
  { name: "level", type: "1 | 2 | 3 | 4",                   description: "Visual heading size. Maps to HTML h1–h4. Defaults to 2." },
];

const paragraphProps: PropRow[] = [
  { name: "text", type: "string", required: true, description: "Body text content. Plain string — may be longer than a TextValue." },
];

export function TextPage() {
  return (
    <Stack gap="xl">
      <div>
        <Badge mb="xs" variant="light" color="gray" size="sm">Text</Badge>
        <Title order={1} mb="xs">Text</Title>
        <Text c="dimmed" size="lg">
          Standalone text nodes: <code>label</code> for short inline strings,{" "}
          <code>heading</code> for titles, and <code>paragraph</code> for body copy.
          All three are valid <code>LayoutNode</code>s and can appear anywhere in the tree.
        </Text>
      </div>

      <Divider />

      <div>
        <Text fw={600} mb="xs">Import</Text>
        <CodeHighlight code={importCode} language="typescript" />
      </div>

      <Divider />

      {/* ── Label ── */}
      <div>
        <Title order={2} mb="lg">Label</Title>
        <DemoBlock title="Inline labels" doc={labelBasic} code={labelBasicCode} />
        <Title order={3} mt="lg" mb="sm">Label props</Title>
        <PropsTable rows={labelProps} />
      </div>

      <Divider />

      {/* ── Heading ── */}
      <div>
        <Title order={2} mb="lg">Heading</Title>
        <DemoBlock title="All levels" doc={headingLevels} code={headingLevelsCode} />
        <Title order={3} mt="lg" mb="sm">Heading props</Title>
        <PropsTable rows={headingProps} />
      </div>

      <Divider />

      {/* ── Paragraph ── */}
      <div>
        <Title order={2} mb="lg">Paragraph</Title>
        <DemoBlock title="Body copy with heading" doc={paragraphBasic} code={paragraphBasicCode} />
        <Title order={3} mt="lg" mb="sm">Paragraph props</Title>
        <PropsTable rows={paragraphProps} />
      </div>
    </Stack>
  );
}
