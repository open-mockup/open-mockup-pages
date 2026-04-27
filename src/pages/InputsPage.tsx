import React from "react";
import { Badge, Divider, Stack, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { DemoBlock } from "../components/DemoBlock.js";
import { PropsTable, type PropRow } from "../components/PropsTable.js";
import {
  passwordExample,
  passwordExampleCode,
  searchExample,
  searchExampleCode,
  numericExample,
  numericExampleCode,
} from "../examples/inputs.js";

const importCode = `import { field, form } from "@open-mockup/dsl";
// component values: "passwordInput" | "searchInput" | "numericInput"`;

const fieldProps: PropRow[] = [
  { name: "key",         type: "string",    required: true, description: "Unique identifier within the form." },
  { name: "component",   type: '"passwordInput" | "searchInput" | "numericInput"', required: true, description: "Specialised input widget." },
  { name: "label",       type: "TextValue", required: true, description: "Visible field label." },
  { name: "required",    type: "boolean",                   description: "Marks the field as required." },
  { name: "placeholder", type: "string",                    description: "Placeholder text shown when the field is empty." },
];

export function InputsPage() {
  return (
    <Stack gap="xl">
      <div>
        <Badge mb="xs" variant="light" color="indigo" size="sm">Form</Badge>
        <Title order={1} mb="xs">Specialised inputs</Title>
        <Text c="dimmed" size="lg">
          Additional <code>FieldComponent</code> values for password, search, and numeric fields.
          Used inside <code>form</code> exactly like <code>textInput</code>.
        </Text>
      </div>

      <Divider />

      <div>
        <Text fw={600} mb="xs">Import</Text>
        <CodeHighlight code={importCode} language="typescript" />
      </div>

      <Divider />

      {/* ── Password ── */}
      <div>
        <Title order={2} mb="lg">passwordInput</Title>
        <Text c="dimmed" mb="lg" size="sm">
          Renders a masked text field. Suitable for any secret value, not only passwords.
        </Text>
        <DemoBlock title="Change password form" doc={passwordExample} code={passwordExampleCode} />
      </div>

      <Divider />

      {/* ── Search ── */}
      <div>
        <Title order={2} mb="lg">searchInput</Title>
        <Text c="dimmed" mb="lg" size="sm">
          Text field with a search icon prefix. Signals filtering intent to the reader.
        </Text>
        <DemoBlock title="Customer search" doc={searchExample} code={searchExampleCode} />
      </div>

      <Divider />

      {/* ── Numeric ── */}
      <div>
        <Title order={2} mb="lg">numericInput</Title>
        <Text c="dimmed" mb="lg" size="sm">
          Integer or decimal input with increment/decrement controls.
        </Text>
        <DemoBlock title="Order line item" doc={numericExample} code={numericExampleCode} />
      </div>

      <Divider />

      <div>
        <Title order={2} mb="sm">Field props</Title>
        <PropsTable rows={fieldProps} />
      </div>
    </Stack>
  );
}
