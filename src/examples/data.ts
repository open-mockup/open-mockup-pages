import {
  avatar,
  chart,
  dataSourceRef,
  dsl,
  grid,
  iconPlaceholder,
  image,
  list,
  map,
  page,
  stat,
  stack,
  table,
  text,
  tree,
} from "@openmockup/dsl";
import type { MockupDoc } from "@openmockup/dsl";

// ─── Table ────────────────────────────────────────────────────────────────────

export const tableBasic: MockupDoc = dsl({
  page: page({
    title: text("Orders table"),
    layout: table({
      dataSource: dataSourceRef("orders"),
      columns: [text("Order ID"), text("Customer"), text("Status"), text("Total")],
    }),
  }),
});

export const tableBasicCode = `\
import { dataSourceRef, dsl, page, table, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Orders table"),
    layout: table({
      dataSource: dataSourceRef("orders"),
      columns: [text("Order ID"), text("Customer"), text("Status"), text("Total")],
    }),
  }),
});`;

// ─── List ─────────────────────────────────────────────────────────────────────

export const listBasic: MockupDoc = dsl({
  page: page({
    title: text("Notification list"),
    layout: list({
      dataSource: dataSourceRef("notifications"),
      itemTemplate: text("{title} — {timestamp}"),
    }),
  }),
});

export const listBasicCode = `\
import { dataSourceRef, dsl, list, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Notification list"),
    layout: list({
      dataSource: dataSourceRef("notifications"),
      itemTemplate: text("{title} — {timestamp}"),
    }),
  }),
});`;

// ─── Stat ─────────────────────────────────────────────────────────────────────

export const statGrid: MockupDoc = dsl({
  page: page({
    title: text("Dashboard stats"),
    layout: grid({
      columns: 3,
      children: [
        stat({ label: text("Monthly revenue"), value: "$48,200" }),
        stat({ label: text("Active users"),    value: 1_340 }),
        stat({ label: text("Churn rate"),      value: "2.4%" }),
      ],
    }),
  }),
});

export const statGridCode = `\
import { dsl, grid, page, stat, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Dashboard stats"),
    layout: grid({
      columns: 3,
      children: [
        stat({ label: text("Monthly revenue"), value: "$48,200" }),
        stat({ label: text("Active users"),    value: 1340 }),
        stat({ label: text("Churn rate"),      value: "2.4%" }),
      ],
    }),
  }),
});`;

// ─── Tree ─────────────────────────────────────────────────────────────────────

export const treeBasic: MockupDoc = dsl({
  page: page({
    title: text("Category tree"),
    layout: tree({
      dataSource: dataSourceRef("categories"),
    }),
  }),
});

export const treeBasicCode = `\
import { dataSourceRef, dsl, page, text, tree } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Category tree"),
    layout: tree({
      dataSource: dataSourceRef("categories"),
    }),
  }),
});`;

// ─── Media placeholders ───────────────────────────────────────────────────────

export const mediaPlaceholders: MockupDoc = dsl({
  page: page({
    title: text("Media placeholders"),
    layout: grid({
      columns: 2,
      children: [
        image({ label: text("Product image"), aspectRatio: "4:3" }),
        avatar({ name: text("Jane Doe"), size: "lg" }),
        chart({ chartType: "bar", title: text("Revenue trend") }),
        map({ label: text("Delivery zones") }),
      ],
    }),
  }),
});

export const mediaPlaceholdersCode = `\
import { avatar, chart, dsl, grid, image, map, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Media placeholders"),
    layout: grid({
      columns: 2,
      children: [
        image({ label: text("Product image"), aspectRatio: "4:3" }),
        avatar({ name: text("Jane Doe"), size: "lg" }),
        chart({ chartType: "bar", title: text("Revenue trend") }),
        map({ label: text("Delivery zones") }),
      ],
    }),
  }),
});`;

export const iconPlaceholderBasic: MockupDoc = dsl({
  page: page({
    title: text("Icon placeholder"),
    layout: stack({
      direction: "horizontal",
      gap: 8,
      children: [
        iconPlaceholder({ icon: "search" }),
        iconPlaceholder({ icon: "menu" }),
        iconPlaceholder({ icon: "chart" }),
      ],
    }),
  }),
});

export const iconPlaceholderBasicCode = `\
import { dsl, iconPlaceholder, page, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Icon placeholder"),
    layout: stack({
      direction: "horizontal",
      gap: 8,
      children: [
        iconPlaceholder({ icon: "search" }),
        iconPlaceholder({ icon: "menu" }),
        iconPlaceholder({ icon: "chart" }),
      ],
    }),
  }),
});`;
