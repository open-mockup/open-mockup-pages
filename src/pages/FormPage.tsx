import React from "react";
import { Badge, Divider, Stack, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { DemoBlock } from "../components/DemoBlock.js";
import { PropsTable, type PropRow } from "../components/PropsTable.js";
import {
  fieldTypes,
  fieldTypesCode,
  formWithActions,
  formWithActionsCode,
} from "../examples/form.js";

const importCode = `import { form, field } from "@open-mockup/dsl";`;

const formProps: PropRow[] = [
  { name: "fields",  type: "[FieldNode, ...]", required: true, description: "At least one field." },
  { name: "actions", type: "ActionBarNode",                    description: "Optional ActionBar rendered below the fields." },
];

const fieldProps: PropRow[] = [
  { name: "key",         type: "string",       required: true, description: "Unique field identifier within the form." },
  { name: "component",   type: '"textInput" | "textArea" | "select" | "multiSelect" | "checkbox" | "radioGroup" | "switch" | "dateInput"', required: true, description: "Field widget to render." },
  { name: "label",       type: "TextValue",    required: true, description: "Visible label text." },
  { name: "required",    type: "boolean",                      description: "Marks the field as required. Default false." },
  { name: "options",     type: "TextValue[]",                  description: "Option list for select and radioGroup." },
  { name: "placeholder", type: "string",                       description: "Placeholder text for text-like inputs." },
];

export function FormPage() {
  return (
    <Stack gap="xl">
      <div>
        <Badge mb="xs" variant="light" color="violet" size="sm">Form</Badge>
        <Title order={1} mb="xs">Form &amp; Field</Title>
        <Text c="dimmed" size="lg">
          Compose forms from typed field nodes. <code>form</code> is a container;
          each <code>field</code> maps to a specific input widget.
        </Text>
      </div>

      <Divider />

      <div>
        <Text fw={600} mb="xs">Import</Text>
        <CodeHighlight code={importCode} language="typescript" />
      </div>

      <Divider />

      <div>
        <Title order={2} mb="lg">Examples</Title>
        <DemoBlock title="All field types"  doc={fieldTypes}       code={fieldTypesCode} />
        <DemoBlock title="Form with actions" doc={formWithActions}  code={formWithActionsCode} />
      </div>

      <Divider />

      <div>
        <Title order={2} mb="sm">Form props</Title>
        <PropsTable rows={formProps} />
      </div>

      <div>
        <Title order={2} mt="lg" mb="sm">Field props</Title>
        <PropsTable rows={fieldProps} />
      </div>
    </Stack>
  );
}
