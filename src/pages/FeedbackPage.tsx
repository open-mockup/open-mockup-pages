import React from "react";
import { Badge, Divider, Stack, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { DemoBlock } from "../components/DemoBlock.js";
import { PropsTable, type PropRow } from "../components/PropsTable.js";
import {
  alertVariants,
  alertVariantsCode,
  badgeBasic,
  badgeBasicCode,
  progressBasic,
  progressBasicCode,
  emptyStateBasic,
  emptyStateBasicCode,
  loadingStateBasic,
  loadingStateBasicCode,
  tooltipBasic,
  tooltipBasicCode,
} from "../examples/feedback.js";

const importCode = `import { alert, tooltip, badge, progress, emptyState, loadingState } from "@openmockup/dsl";`;

const alertProps: PropRow[] = [
  { name: "variant", type: '"info" | "success" | "warning" | "error"', required: true, description: "Visual severity style." },
  { name: "text",    type: "TextValue", required: true, description: "Alert message text." },
];

const badgeProps: PropRow[] = [
  { name: "text", type: "TextValue", required: true, description: "Short label displayed inside the badge." },
];

const progressProps: PropRow[] = [
  { name: "value", type: "number (0–100)", required: true, description: "Percent complete." },
];

const emptyStateProps: PropRow[] = [
  { name: "title",       type: "TextValue", required: true, description: "Primary heading." },
  { name: "description", type: "string",                    description: "Optional secondary text below the heading." },
];

const loadingStateProps: PropRow[] = [
  { name: "label", type: "TextValue", required: true, description: "Text shown next to the spinner." },
];

const tooltipProps: PropRow[] = [
  { name: "text", type: "TextValue", required: true, description: "Tooltip/callout message." },
];

export function FeedbackPage() {
  return (
    <Stack gap="xl">
      <div>
        <Badge mb="xs" variant="light" color="pink" size="sm">Feedback</Badge>
        <Title order={1} mb="xs">Feedback</Title>
        <Text c="dimmed" size="lg">
          Status and communication nodes: <code>alert</code>, <code>tooltip</code>, <code>badge</code>,
          {" "}<code>progress</code>, <code>emptyState</code>, and <code>loadingState</code>.
        </Text>
      </div>

      <Divider />

      <div>
        <Text fw={600} mb="xs">Import</Text>
        <CodeHighlight code={importCode} language="typescript" />
      </div>

      <Divider />

      {/* ── Alert ── */}
      <div>
        <Title order={2} mb="lg">Alert</Title>
        <DemoBlock title="All variants" doc={alertVariants} code={alertVariantsCode} />
        <Title order={3} mt="lg" mb="sm">Alert props</Title>
        <PropsTable rows={alertProps} />
      </div>

      <Divider />

      <div>
        <Title order={2} mb="lg">Tooltip</Title>
        <DemoBlock title="Callout helper text" doc={tooltipBasic} code={tooltipBasicCode} />
        <Title order={3} mt="lg" mb="sm">Tooltip props</Title>
        <PropsTable rows={tooltipProps} />
      </div>

      <Divider />

      {/* ── Badge ── */}
      <div>
        <Title order={2} mb="lg">Badge</Title>
        <DemoBlock title="Multiple badges" doc={badgeBasic} code={badgeBasicCode} />
        <Title order={3} mt="lg" mb="sm">Badge props</Title>
        <PropsTable rows={badgeProps} />
      </div>

      <Divider />

      {/* ── Progress ── */}
      <div>
        <Title order={2} mb="lg">Progress</Title>
        <DemoBlock title="Progress at 25 / 60 / 100" doc={progressBasic} code={progressBasicCode} />
        <Title order={3} mt="lg" mb="sm">Progress props</Title>
        <PropsTable rows={progressProps} />
      </div>

      <Divider />

      {/* ── EmptyState ── */}
      <div>
        <Title order={2} mb="lg">EmptyState</Title>
        <DemoBlock title="No results" doc={emptyStateBasic} code={emptyStateBasicCode} />
        <Title order={3} mt="lg" mb="sm">EmptyState props</Title>
        <PropsTable rows={emptyStateProps} />
      </div>

      <Divider />

      {/* ── LoadingState ── */}
      <div>
        <Title order={2} mb="lg">LoadingState</Title>
        <DemoBlock title="Spinner with label" doc={loadingStateBasic} code={loadingStateBasicCode} />
        <Title order={3} mt="lg" mb="sm">LoadingState props</Title>
        <PropsTable rows={loadingStateProps} />
      </div>
    </Stack>
  );
}
