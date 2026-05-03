import {
  actionBar,
  actionRef,
  button,
  drawer,
  dsl,
  form,
  field,
  modal,
  page,
  popover,
  stack,
  stat,
  text,
} from "@openmockup/dsl";
import type { MockupDoc } from "@openmockup/dsl";

// ─── Modal ────────────────────────────────────────────────────────────────────

export const modalBasic: MockupDoc = dsl({
  page: page({
    title: text("Modal"),
    layout: modal({
      title: text("Confirm deletion"),
      content: stack({
        direction: "vertical",
        gap: 12,
        children: [
          stat({ label: text("Item"), value: "Report Q4-2025.pdf" }),
          actionBar([
            button({ label: text("Delete"), variant: "primary",   action: actionRef("confirm-delete") }),
            button({ label: text("Cancel"), variant: "secondary" }),
          ]),
        ],
      }),
    }),
  }),
});

export const modalBasicCode = `\
import { actionBar, actionRef, button, dsl, modal, page, stack, stat, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Modal"),
    layout: modal({
      title: text("Confirm deletion"),
      content: stack({
        direction: "vertical",
        gap: 12,
        children: [
          stat({ label: text("Item"), value: "Report Q4-2025.pdf" }),
          actionBar([
            button({ label: text("Delete"), variant: "primary",   action: actionRef("confirm-delete") }),
            button({ label: text("Cancel"), variant: "secondary" }),
          ]),
        ],
      }),
    }),
  }),
});`;

// ─── Drawer ───────────────────────────────────────────────────────────────────

export const drawerRight: MockupDoc = dsl({
  page: page({
    title: text("Right drawer"),
    layout: drawer({
      side: "right",
      content: form({
        fields: [
          field({ key: "name",  component: "textInput", label: text("Name"),  required: true }),
          field({ key: "email", component: "textInput", label: text("Email"), required: true, placeholder: "you@example.com" }),
          field({ key: "role",  component: "select",    label: text("Role"),  options: [text("Viewer"), text("Editor"), text("Admin")] }),
        ],
        actions: actionBar([
          button({ label: text("Save"),   variant: "primary",   action: actionRef("save") }),
          button({ label: text("Cancel"), variant: "secondary" }),
        ]),
      }),
    }),
  }),
});

export const drawerRightCode = `\
import { actionBar, actionRef, button, drawer, dsl, field, form, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Right drawer"),
    layout: drawer({
      side: "right",
      content: form({
        fields: [
          field({ key: "name",  component: "textInput", label: text("Name"),  required: true }),
          field({ key: "email", component: "textInput", label: text("Email"), required: true, placeholder: "you@example.com" }),
          field({ key: "role",  component: "select",    label: text("Role"),  options: [text("Viewer"), text("Editor"), text("Admin")] }),
        ],
        actions: actionBar([
          button({ label: text("Save"),   variant: "primary",   action: actionRef("save") }),
          button({ label: text("Cancel"), variant: "secondary" }),
        ]),
      }),
    }),
  }),
});`;

// ─── Popover ──────────────────────────────────────────────────────────────────

export const popoverBasic: MockupDoc = dsl({
  page: page({
    title: text("Popover"),
    layout: popover({
      content: stack({
        direction: "vertical",
        gap: 8,
        children: [
          stat({ label: text("Created by"), value: "Jane Doe" }),
          stat({ label: text("Created at"), value: "2025-03-15" }),
          stat({ label: text("Status"),     value: "Active" }),
        ],
      }),
    }),
  }),
});

export const popoverBasicCode = `\
import { dsl, page, popover, stack, stat, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Popover"),
    layout: popover({
      content: stack({
        direction: "vertical",
        gap: 8,
        children: [
          stat({ label: text("Created by"), value: "Jane Doe" }),
          stat({ label: text("Created at"), value: "2025-03-15" }),
          stat({ label: text("Status"),     value: "Active" }),
        ],
      }),
    }),
  }),
});`;
