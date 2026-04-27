import React from "react";
import { Box, Paper, Tabs, Text, useComputedColorScheme } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import type { MockupDoc } from "@open-mockup/dsl";
import { renderDsl } from "@open-mockup/renderer-mantine";

interface DemoBlockProps {
  title?: string;
  doc: MockupDoc;
  /** TypeScript builder code shown in the Code tab. */
  code: string;
}

export function DemoBlock({ title, doc, code }: DemoBlockProps) {
  const dslJson = JSON.stringify(doc, null, 2);
  const isDark = useComputedColorScheme("light") === "dark";

  return (
    <Box mb="xl">
      {title !== undefined && (
        <Text fw={600} mb="xs" size="sm" c="dimmed" tt="uppercase">
          {title}
        </Text>
      )}

      <Paper withBorder radius="md" style={{ overflow: "hidden" }}>
        <Tabs defaultValue="preview">
          {/* Tab labels */}
          <Box
            px="md"
            style={{
              borderBottom: `1px solid ${
                isDark ? "var(--mantine-color-dark-4)" : "var(--mantine-color-gray-3)"
              }`,
              backgroundColor: isDark
                ? "var(--mantine-color-dark-6)"
                : "var(--mantine-color-gray-0)",
            }}
          >
            <Tabs.List style={{ border: "none" }}>
              <Tabs.Tab value="preview">Preview</Tabs.Tab>
              <Tabs.Tab value="dsl">DSL JSON</Tabs.Tab>
              <Tabs.Tab value="code">Builder code</Tabs.Tab>
            </Tabs.List>
          </Box>

          {/* Preview — dotted background like mantine.dev */}
          <Tabs.Panel value="preview">
            <Box
              p="xl"
              style={{
                backgroundImage:
                  `radial-gradient(${
                    isDark ? "var(--mantine-color-dark-2)" : "var(--mantine-color-gray-4)"
                  } 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
                minHeight: 120,
                backgroundColor: isDark
                  ? "var(--mantine-color-dark-8)"
                  : "var(--mantine-color-white)",
              }}
            >
              <Box
                p="lg"
                style={{
                  backgroundColor: isDark
                    ? "var(--mantine-color-dark-5)"
                    : "var(--mantine-color-white)",
                  borderRadius: "var(--mantine-radius-md)",
                  display: "inline-block",
                  minWidth: "100%",
                  boxSizing: "border-box",
                }}
              >
                {renderDsl(doc)}
              </Box>
            </Box>
          </Tabs.Panel>

          {/* DSL JSON */}
          <Tabs.Panel value="dsl">
            <CodeHighlight code={dslJson} language="json" />
          </Tabs.Panel>

          {/* Builder code */}
          <Tabs.Panel value="code">
            <CodeHighlight code={code} language="typescript" />
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Box>
  );
}
