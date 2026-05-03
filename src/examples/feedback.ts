import {
  alert,
  badge,
  dsl,
  emptyState,
  loadingState,
  page,
  progress,
  stack,
  text,
  tooltip,
} from "@openmockup/dsl";
import type { MockupDoc } from "@openmockup/dsl";

// ─── Alert variants ───────────────────────────────────────────────────────────

export const alertVariants: MockupDoc = dsl({
  page: page({
    title: text("Alert variants"),
    layout: stack({
      direction: "vertical",
      gap: 12,
      children: [
        alert({ variant: "info",    text: text("Your session will expire in 10 minutes.") }),
        alert({ variant: "success", text: text("Changes saved successfully.") }),
        alert({ variant: "warning", text: text("Storage is at 90% capacity.") }),
        alert({ variant: "error",   text: text("Failed to connect to the server.") }),
      ],
    }),
  }),
});

export const alertVariantsCode = `\
import { alert, dsl, page, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Alert variants"),
    layout: stack({
      direction: "vertical",
      gap: 12,
      children: [
        alert({ variant: "info",    text: text("Your session will expire in 10 minutes.") }),
        alert({ variant: "success", text: text("Changes saved successfully.") }),
        alert({ variant: "warning", text: text("Storage is at 90% capacity.") }),
        alert({ variant: "error",   text: text("Failed to connect to the server.") }),
      ],
    }),
  }),
});`;

// ─── Badge ────────────────────────────────────────────────────────────────────

export const badgeBasic: MockupDoc = dsl({
  page: page({
    title: text("Badges"),
    layout: stack({
      direction: "horizontal",
      gap: 8,
      children: [
        badge({ text: text("New") }),
        badge({ text: text("Beta") }),
        badge({ text: text("Deprecated") }),
        badge({ text: text("v2.0") }),
      ],
    }),
  }),
});

export const badgeBasicCode = `\
import { badge, dsl, page, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Badges"),
    layout: stack({
      direction: "horizontal",
      gap: 8,
      children: [
        badge({ text: text("New") }),
        badge({ text: text("Beta") }),
        badge({ text: text("Deprecated") }),
        badge({ text: text("v2.0") }),
      ],
    }),
  }),
});`;

// ─── Progress ─────────────────────────────────────────────────────────────────

export const progressBasic: MockupDoc = dsl({
  page: page({
    title: text("Progress bars"),
    layout: stack({
      direction: "vertical",
      gap: 16,
      children: [
        progress({ value: 25 }),
        progress({ value: 60 }),
        progress({ value: 100 }),
      ],
    }),
  }),
});

export const progressBasicCode = `\
import { dsl, page, progress, stack, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Progress bars"),
    layout: stack({
      direction: "vertical",
      gap: 16,
      children: [
        progress({ value: 25 }),
        progress({ value: 60 }),
        progress({ value: 100 }),
      ],
    }),
  }),
});`;

// ─── EmptyState ───────────────────────────────────────────────────────────────

export const emptyStateBasic: MockupDoc = dsl({
  page: page({
    title: text("Empty state"),
    layout: emptyState({
      title: text("No results found"),
      description: "Try adjusting your filters or search terms.",
    }),
  }),
});

export const emptyStateBasicCode = `\
import { dsl, emptyState, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Empty state"),
    layout: emptyState({
      title: text("No results found"),
      description: "Try adjusting your filters or search terms.",
    }),
  }),
});`;

// ─── LoadingState ─────────────────────────────────────────────────────────────

export const loadingStateBasic: MockupDoc = dsl({
  page: page({
    title: text("Loading state"),
    layout: loadingState({
      label: text("Fetching data…"),
    }),
  }),
});

export const loadingStateBasicCode = `\
import { dsl, loadingState, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Loading state"),
    layout: loadingState({
      label: text("Fetching data…"),
    }),
  }),
});`;

// ─── Tooltip / callout ────────────────────────────────────────────────────────

export const tooltipBasic: MockupDoc = dsl({
  page: page({
    title: text("Tooltip"),
    layout: tooltip({
      text: text("Use filters to narrow the results."),
    }),
  }),
});

export const tooltipBasicCode = `\
import { dsl, page, text, tooltip } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Tooltip"),
    layout: tooltip({
      text: text("Use filters to narrow the results."),
    }),
  }),
});`;
