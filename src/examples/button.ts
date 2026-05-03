import {
  actionBar,
  actionRef,
  alert,
  badge,
  button,
  card,
  dsl,
  iconButton,
  linkAction,
  page,
  segmentedButton,
  segmentedItem,
  section,
  split,
  stack,
  stat,
  text,
} from "@openmockup/dsl";
import type { MockupDoc } from "@openmockup/dsl";

// ─── Example 1: single button ────────────────────────────────────────────────

export const singleButton: MockupDoc = dsl({
  page: page({
    title: text("Button demo"),
    layout: button({
      label: text("Save changes"),
      variant: "primary",
      action: actionRef("save"),
    }),
  }),
});

export const singleButtonCode = `\
import { button, dsl, page, text, actionRef } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Button demo"),
    layout: button({
      label: text("Save changes"),
      variant: "primary",
      action: actionRef("save"),
    }),
  }),
});`;

// ─── Example 2: all three variants ───────────────────────────────────────────

export const buttonVariants: MockupDoc = dsl({
  page: page({
    title: text("Button variants"),
    layout: stack({
      direction: "horizontal",
      gap: 8,
      children: [
        button({ label: text("Primary"),   variant: "primary" }),
        button({ label: text("Secondary"), variant: "secondary" }),
        button({ label: text("Ghost"),     variant: "ghost" }),
      ],
    }),
  }),
});

export const buttonVariantsCode = `\
import { button, dsl, page, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Button variants"),
    layout: stack({
      direction: "horizontal",
      gap: 8,
      children: [
        button({ label: text("Primary"),   variant: "primary" }),
        button({ label: text("Secondary"), variant: "secondary" }),
        button({ label: text("Ghost"),     variant: "ghost" }),
      ],
    }),
  }),
});`;

// ─── Example 3: ActionBar (mixed buttons + link) ──────────────────────────────

export const buttonActionBar: MockupDoc = dsl({
  page: page({
    title: text("ActionBar"),
    layout: actionBar([
      button({ label: text("Save"),   variant: "primary",   action: actionRef("save") }),
      button({ label: text("Cancel"), variant: "secondary" }),
      linkAction({ label: text("Delete record"), action: actionRef("delete") }),
    ]),
  }),
});

export const buttonActionBarCode = `\
import { actionBar, actionRef, button, dsl, linkAction, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("ActionBar"),
    layout: actionBar([
      button({ label: text("Save"),   variant: "primary",   action: actionRef("save") }),
      button({ label: text("Cancel"), variant: "secondary" }),
      linkAction({ label: text("Delete record"), action: actionRef("delete") }),
    ]),
  }),
});`;

// ─── Example 4: icon buttons ─────────────────────────────────────────────────

export const iconButtonRow: MockupDoc = dsl({
  page: page({
    title: text("Icon buttons"),
    layout: actionBar([
      iconButton({ icon: "search", label: text("Search"), variant: "secondary", action: actionRef("search") }),
      iconButton({ icon: "menu", label: text("More"), variant: "ghost" }),
      button({ label: text("Open"), variant: "primary" }),
    ]),
  }),
});

export const iconButtonRowCode = `\
import { actionBar, actionRef, button, dsl, iconButton, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Icon buttons"),
    layout: actionBar([
      iconButton({ icon: "search", label: text("Search"), variant: "secondary", action: actionRef("search") }),
      iconButton({ icon: "menu", label: text("More"), variant: "ghost" }),
      button({ label: text("Open"), variant: "primary" }),
    ]),
  }),
});`;

// ─── Example 5: segmented button ─────────────────────────────────────────────

export const segmentedModes: MockupDoc = dsl({
  page: page({
    title: text("Segmented mode switch"),
    layout: segmentedButton({
      items: [
        segmentedItem({ key: "day", label: text("Day") }),
        segmentedItem({ key: "week", label: text("Week") }),
        segmentedItem({ key: "month", label: text("Month") }),
      ],
      activeKey: "week",
    }),
  }),
});

export const segmentedModesCode = `\
import { dsl, page, segmentedButton, segmentedItem, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Segmented mode switch"),
    layout: segmentedButton({
      items: [
        segmentedItem({ key: "day", label: text("Day") }),
        segmentedItem({ key: "week", label: text("Week") }),
        segmentedItem({ key: "month", label: text("Month") }),
      ],
      activeKey: "week",
    }),
  }),
});`;

// ─── Example 6: realistic order page ─────────────────────────────────────────

export const orderPage: MockupDoc = dsl({
  page: page({
    title: text("Order #1042"),
    layout: split({
      ratio: 0.3,
      left: section({
        title: text("Summary"),
        content: stack({
          direction: "vertical",
          gap: 8,
          children: [
            stat({ label: text("Status"), value: "Shipped" }),
            stat({ label: text("Total"),  value: "$320.00" }),
            badge({ text: text("Express") }),
            alert({ variant: "info", text: text("Delivery in 3 days") }),
          ],
        }),
      }),
      right: card({
        title: text("Actions"),
        content: actionBar([
          button({ label: text("Confirm shipment"), variant: "primary",   action: actionRef("confirm") }),
          button({ label: text("Print invoice"),    variant: "secondary", action: actionRef("print") }),
          linkAction({ label: text("Cancel order"),                       action: actionRef("cancel") }),
        ]),
      }),
    }),
  }),
});

export const orderPageCode = `\
import {
  actionBar, actionRef, alert, badge, button, card,
  dsl, linkAction, page, section, split, stack, stat, text,
} from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Order #1042"),
    layout: split({
      ratio: 0.3,
      left: section({
        title: text("Summary"),
        content: stack({
          direction: "vertical",
          gap: 8,
          children: [
            stat({ label: text("Status"), value: "Shipped" }),
            stat({ label: text("Total"),  value: "$320.00" }),
            badge({ text: text("Express") }),
            alert({ variant: "info", text: text("Delivery in 3 days") }),
          ],
        }),
      }),
      right: card({
        title: text("Actions"),
        content: actionBar([
          button({ label: text("Confirm shipment"), variant: "primary",   action: actionRef("confirm") }),
          button({ label: text("Print invoice"),    variant: "secondary", action: actionRef("print") }),
          linkAction({ label: text("Cancel order"),                       action: actionRef("cancel") }),
        ]),
      }),
    }),
  }),
});`;
