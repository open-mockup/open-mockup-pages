import {
  dsl,
  heading,
  label,
  page,
  paragraph,
  stack,
  text,
} from "@openmockup/dsl";
import type { MockupDoc } from "@openmockup/dsl";

// ─── Label ────────────────────────────────────────────────────────────────────

export const labelBasic: MockupDoc = dsl({
  page: page({
    title: text("Label"),
    layout: stack({
      direction: "vertical",
      gap: 8,
      children: [
        label({ text: text("Status") }),
        label({ text: text("Created at") }),
        label({ text: text("Assigned to") }),
      ],
    }),
  }),
});

export const labelBasicCode = `\
import { dsl, label, page, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Label"),
    layout: stack({
      direction: "vertical",
      gap: 8,
      children: [
        label({ text: text("Status") }),
        label({ text: text("Created at") }),
        label({ text: text("Assigned to") }),
      ],
    }),
  }),
});`;

// ─── Heading ──────────────────────────────────────────────────────────────────

export const headingLevels: MockupDoc = dsl({
  page: page({
    title: text("Heading levels"),
    layout: stack({
      direction: "vertical",
      gap: 12,
      children: [
        heading({ text: text("H1 — Page title"),     level: 1 }),
        heading({ text: text("H2 — Section heading"), level: 2 }),
        heading({ text: text("H3 — Sub-section"),     level: 3 }),
        heading({ text: text("H4 — Card title"),      level: 4 }),
      ],
    }),
  }),
});

export const headingLevelsCode = `\
import { dsl, heading, page, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Heading levels"),
    layout: stack({
      direction: "vertical",
      gap: 12,
      children: [
        heading({ text: text("H1 — Page title"),      level: 1 }),
        heading({ text: text("H2 — Section heading"), level: 2 }),
        heading({ text: text("H3 — Sub-section"),     level: 3 }),
        heading({ text: text("H4 — Card title"),      level: 4 }),
      ],
    }),
  }),
});`;

// ─── Paragraph ────────────────────────────────────────────────────────────────

export const paragraphBasic: MockupDoc = dsl({
  page: page({
    title: text("Paragraph"),
    layout: stack({
      direction: "vertical",
      gap: 16,
      children: [
        heading({ text: text("About this report"), level: 2 }),
        paragraph({
          text: "This report summarises all orders placed in Q1 2025. Data is refreshed daily at midnight UTC and reflects confirmed transactions only.",
        }),
        paragraph({
          text: "For questions or discrepancies, contact the data team via the internal helpdesk.",
        }),
      ],
    }),
  }),
});

export const paragraphBasicCode = `\
import { dsl, heading, page, paragraph, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Paragraph"),
    layout: stack({
      direction: "vertical",
      gap: 16,
      children: [
        heading({ text: text("About this report"), level: 2 }),
        paragraph({
          text: "This report summarises all orders placed in Q1 2025. Data is refreshed daily at midnight UTC.",
        }),
        paragraph({
          text: "For questions or discrepancies, contact the data team via the internal helpdesk.",
        }),
      ],
    }),
  }),
});`;
