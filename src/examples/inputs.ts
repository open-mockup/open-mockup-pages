import {
  actionBar,
  actionRef,
  button,
  dsl,
  field,
  form,
  page,
  text,
} from "@open-mockup/dsl";
import type { MockupDoc } from "@open-mockup/dsl";

// ─── Password ─────────────────────────────────────────────────────────────────

export const passwordExample: MockupDoc = dsl({
  page: page({
    title: text("Password input"),
    layout: form({
      fields: [
        field({ key: "current",  component: "passwordInput", label: text("Current password"), required: true }),
        field({ key: "new",      component: "passwordInput", label: text("New password"),     required: true }),
        field({ key: "confirm",  component: "passwordInput", label: text("Confirm password"), required: true }),
      ],
      actions: actionBar([
        button({ label: text("Update password"), variant: "primary", action: actionRef("update-password") }),
      ]),
    }),
  }),
});

export const passwordExampleCode = `\
import { actionBar, actionRef, button, dsl, field, form, page, text } from "@open-mockup/dsl";

const doc = dsl({
  page: page({
    title: text("Password input"),
    layout: form({
      fields: [
        field({ key: "current", component: "passwordInput", label: text("Current password"), required: true }),
        field({ key: "new",     component: "passwordInput", label: text("New password"),     required: true }),
        field({ key: "confirm", component: "passwordInput", label: text("Confirm password"), required: true }),
      ],
      actions: actionBar([
        button({ label: text("Update password"), variant: "primary", action: actionRef("update-password") }),
      ]),
    }),
  }),
});`;

// ─── Search ───────────────────────────────────────────────────────────────────

export const searchExample: MockupDoc = dsl({
  page: page({
    title: text("Search input"),
    layout: form({
      fields: [
        field({ key: "q", component: "searchInput", label: text("Search customers"), placeholder: "Name or email…" }),
      ],
    }),
  }),
});

export const searchExampleCode = `\
import { dsl, field, form, page, text } from "@open-mockup/dsl";

const doc = dsl({
  page: page({
    title: text("Search input"),
    layout: form({
      fields: [
        field({ key: "q", component: "searchInput", label: text("Search customers"), placeholder: "Name or email…" }),
      ],
    }),
  }),
});`;

// ─── Numeric ──────────────────────────────────────────────────────────────────

export const numericExample: MockupDoc = dsl({
  page: page({
    title: text("Numeric input"),
    layout: form({
      fields: [
        field({ key: "qty",      component: "numericInput", label: text("Quantity"),       required: true }),
        field({ key: "discount", component: "numericInput", label: text("Discount (%)") }),
        field({ key: "price",    component: "numericInput", label: text("Unit price ($)"), required: true }),
      ],
      actions: actionBar([
        button({ label: text("Add to order"), variant: "primary", action: actionRef("add-item") }),
      ]),
    }),
  }),
});

export const numericExampleCode = `\
import { actionBar, actionRef, button, dsl, field, form, page, text } from "@open-mockup/dsl";

const doc = dsl({
  page: page({
    title: text("Numeric input"),
    layout: form({
      fields: [
        field({ key: "qty",      component: "numericInput", label: text("Quantity"),       required: true }),
        field({ key: "discount", component: "numericInput", label: text("Discount (%)") }),
        field({ key: "price",    component: "numericInput", label: text("Unit price ($)"), required: true }),
      ],
      actions: actionBar([
        button({ label: text("Add to order"), variant: "primary", action: actionRef("add-item") }),
      ]),
    }),
  }),
});`;
