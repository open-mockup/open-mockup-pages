import {
  badge,
  button,
  card,
  dataSourceRef,
  dsl,
  grid,
  list,
  page,
  section,
  split,
  stack,
  stat,
  text,
} from "@openmockup/dsl";
import type { MockupDoc } from "@openmockup/dsl";

// ─── Stack ────────────────────────────────────────────────────────────────────

export const stackVertical: MockupDoc = dsl({
  page: page({
    title: text("Vertical stack"),
    layout: stack({
      direction: "vertical",
      gap: 12,
      children: [
        button({ label: text("First"), variant: "primary" }),
        button({ label: text("Second"), variant: "secondary" }),
        button({ label: text("Third"), variant: "ghost" }),
      ],
    }),
  }),
});

export const stackVerticalCode = `\
import { button, dsl, page, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Vertical stack"),
    layout: stack({
      direction: "vertical",
      gap: 12,
      children: [
        button({ label: text("First"),  variant: "primary" }),
        button({ label: text("Second"), variant: "secondary" }),
        button({ label: text("Third"),  variant: "ghost" }),
      ],
    }),
  }),
});`;

export const stackHorizontal: MockupDoc = dsl({
  page: page({
    title: text("Horizontal stack"),
    layout: stack({
      direction: "horizontal",
      gap: 8,
      children: [
        badge({ text: text("Draft") }),
        badge({ text: text("In review") }),
        badge({ text: text("Approved") }),
      ],
    }),
  }),
});

export const stackHorizontalCode = `\
import { badge, dsl, page, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Horizontal stack"),
    layout: stack({
      direction: "horizontal",
      gap: 8,
      children: [
        badge({ text: text("Draft") }),
        badge({ text: text("In review") }),
        badge({ text: text("Approved") }),
      ],
    }),
  }),
});`;

// ─── Grid ─────────────────────────────────────────────────────────────────────

export const gridTwoCols: MockupDoc = dsl({
  page: page({
    title: text("2-column grid"),
    layout: grid({
      columns: 2,
      children: [
        stat({ label: text("Revenue"), value: "$12,400" }),
        stat({ label: text("Orders"), value: 340 }),
        stat({ label: text("Customers"), value: 92 }),
        stat({ label: text("Avg. order"), value: "$36.50" }),
      ],
    }),
  }),
});

export const gridTwoColsCode = `\
import { dsl, grid, page, stat, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("2-column grid"),
    layout: grid({
      columns: 2,
      children: [
        stat({ label: text("Revenue"),   value: "$12,400" }),
        stat({ label: text("Orders"),    value: 340 }),
        stat({ label: text("Customers"), value: 92 }),
        stat({ label: text("Avg. order"), value: "$36.50" }),
      ],
    }),
  }),
});`;

export const gridThreeCols: MockupDoc = dsl({
  page: page({
    title: text("3-column grid"),
    layout: grid({
      columns: 3,
      children: [
        stat({ label: text("Jan"), value: "$4,200" }),
        stat({ label: text("Feb"), value: "$3,800" }),
        stat({ label: text("Mar"), value: "$5,100" }),
      ],
    }),
  }),
});

export const gridThreeColsCode = `\
import { dsl, grid, page, stat, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("3-column grid"),
    layout: grid({
      columns: 3,
      children: [
        stat({ label: text("Jan"), value: "$4,200" }),
        stat({ label: text("Feb"), value: "$3,800" }),
        stat({ label: text("Mar"), value: "$5,100" }),
      ],
    }),
  }),
});`;

// ─── Card ─────────────────────────────────────────────────────────────────────

export const cardBasic: MockupDoc = dsl({
  page: page({
    title: text("Card"),
    layout: card({
      title: text("User profile"),
      content: stack({
        direction: "vertical",
        gap: 8,
        children: [
          stat({ label: text("Name"), value: "Jane Doe" }),
          stat({ label: text("Role"), value: "Admin" }),
          badge({ text: text("Active") }),
        ],
      }),
    }),
  }),
});

export const cardBasicCode = `\
import { badge, card, dsl, page, stack, stat, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Card"),
    layout: card({
      title: text("User profile"),
      content: stack({
        direction: "vertical",
        gap: 8,
        children: [
          stat({ label: text("Name"), value: "Jane Doe" }),
          stat({ label: text("Role"), value: "Admin" }),
          badge({ text: text("Active") }),
        ],
      }),
    }),
  }),
});`;

// ─── Section ──────────────────────────────────────────────────────────────────

export const sectionBasic: MockupDoc = dsl({
  page: page({
    title: text("Section"),
    layout: section({
      title: text("Shipping address"),
      content: stack({
        direction: "vertical",
        gap: 8,
        children: [
          stat({ label: text("Street"), value: "123 Main St" }),
          stat({ label: text("City"), value: "Springfield" }),
          stat({ label: text("ZIP"), value: "12345" }),
        ],
      }),
    }),
  }),
});

export const sectionBasicCode = `\
import { dsl, page, section, stack, stat, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Section"),
    layout: section({
      title: text("Shipping address"),
      content: stack({
        direction: "vertical",
        gap: 8,
        children: [
          stat({ label: text("Street"), value: "123 Main St" }),
          stat({ label: text("City"),   value: "Springfield" }),
          stat({ label: text("ZIP"),    value: "12345" }),
        ],
      }),
    }),
  }),
});`;

// ─── Split ────────────────────────────────────────────────────────────────────

export const splitBasic: MockupDoc = dsl({
  page: page({
    title: text("Split layout"),
    layout: split({
      ratio: 0.3,
      left: section({
        title: text("Sidebar"),
        content: stack({
          direction: "vertical",
          gap: 6,
          children: [
            stat({ label: text("Total items"), value: 24 }),
            badge({ text: text("Filtered: 8") }),
          ],
        }),
      }),
      right: section({
        title: text("Main content"),
        content: list({
          dataSource: dataSourceRef("items"),
          itemTemplate: text("{name} — {status}"),
        }),
      }),
    }),
  }),
});

export const splitBasicCode = `\
import { badge, dataSourceRef, dsl, list, page, section, split, stack, stat, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Split layout"),
    layout: split({
      ratio: 0.3,
      left: section({
        title: text("Sidebar"),
        content: stack({
          direction: "vertical",
          gap: 6,
          children: [
            stat({ label: text("Total items"), value: 24 }),
            badge({ text: text("Filtered: 8") }),
          ],
        }),
      }),
      right: section({
        title: text("Main content"),
        content: list({
          dataSource: dataSourceRef("items"),
          itemTemplate: text("{name} — {status}"),
        }),
      }),
    }),
  }),
});`;
