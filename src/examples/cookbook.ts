import {
  actionBar,
  actionRef,
  alert,
  avatar,
  badge,
  breadcrumb,
  button,
  card,
  chart,
  dataSourceRef,
  drawer,
  dsl,
  emptyState,
  field,
  form,
  grid,
  heading,
  iconButton,
  linkAction,
  loadingState,
  modal,
  navItem,
  page,
  pagination,
  paragraph,
  progress,
  section,
  segmentedButton,
  segmentedItem,
  sidebarNav,
  split,
  stack,
  stat,
  table,
  tabs,
  text,
  topNav,
} from "@open-mockup/dsl";
import type { MockupDoc } from "@open-mockup/dsl";

// ─── 1. Одна кнопка ──────────────────────────────────────────────────────────

export const ex01: MockupDoc = dsl(
  button({ label: text("Submit"), variant: "primary", action: actionRef("submit") })
);

export const ex01Code = `\
import { dsl, button, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  button({ label: text("Submit"), variant: "primary", action: actionRef("submit") })
);`;

// ─── 2. Горизонтальная панель кнопок ─────────────────────────────────────────

export const ex02: MockupDoc = dsl(
  actionBar([
    button({ label: text("Save"),    variant: "primary",   action: actionRef("save") }),
    button({ label: text("Preview"), variant: "secondary", action: actionRef("preview") }),
    linkAction({ label: text("Discard"),                   action: actionRef("discard") }),
  ])
);

export const ex02Code = `\
import { dsl, actionBar, button, linkAction, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  actionBar([
    button({ label: text("Save"),    variant: "primary",   action: actionRef("save") }),
    button({ label: text("Preview"), variant: "secondary", action: actionRef("preview") }),
    linkAction({ label: text("Discard"),                   action: actionRef("discard") }),
  ])
);`;

// ─── 3. Простая форма ────────────────────────────────────────────────────────

export const ex03: MockupDoc = dsl(
  form({
    fields: [
      field({ key: "name",  component: "textInput", label: text("Full name"),  required: true }),
      field({ key: "email", component: "textInput", label: text("Email"),      required: true }),
      field({ key: "bio",   component: "textArea",  label: text("Short bio") }),
    ],
    actions: actionBar([
      button({ label: text("Create"), variant: "primary", action: actionRef("create") }),
      button({ label: text("Cancel"), variant: "ghost" }),
    ]),
  })
);

export const ex03Code = `\
import { dsl, form, field, actionBar, button, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  form({
    fields: [
      field({ key: "name",  component: "textInput", label: text("Full name"),  required: true }),
      field({ key: "email", component: "textInput", label: text("Email"),      required: true }),
      field({ key: "bio",   component: "textArea",  label: text("Short bio") }),
    ],
    actions: actionBar([
      button({ label: text("Create"), variant: "primary", action: actionRef("create") }),
      button({ label: text("Cancel"), variant: "ghost" }),
    ]),
  })
);`;

// ─── 4. KPI-плитки — равная сетка ────────────────────────────────────────────

export const ex04: MockupDoc = dsl(
  grid({
    columns: 3,
    children: [
      stat({ label: text("Revenue"), value: "$48 200" }),
      stat({ label: text("Orders"),  value: 1340 }),
      stat({ label: text("Refunds"), value: 17 }),
    ],
  })
);

export const ex04Code = `\
import { dsl, grid, stat, text } from "@open-mockup/dsl";

export default dsl(
  grid({
    columns: 3,
    children: [
      stat({ label: text("Revenue"), value: "$48 200" }),
      stat({ label: text("Orders"),  value: 1340 }),
      stat({ label: text("Refunds"), value: 17 }),
    ],
  })
);`;

// ─── 5. Состояния страницы ───────────────────────────────────────────────────

export const ex05empty: MockupDoc = dsl(
  emptyState({ title: text("No results"), description: "Try adjusting your filters." })
);
export const ex05loading: MockupDoc = dsl(
  loadingState({ label: text("Loading orders…") })
);
export const ex05error: MockupDoc = dsl(
  alert({ variant: "error", text: text("Failed to load data. Please try again.") })
);

export const ex05Code = `\
import { dsl, emptyState, loadingState, alert, text } from "@open-mockup/dsl";

export const empty = dsl(
  emptyState({ title: text("No results"), description: "Try adjusting your filters." })
);

export const loading = dsl(
  loadingState({ label: text("Loading orders…") })
);

export const error = dsl(
  alert({ variant: "error", text: text("Failed to load data. Please try again.") })
);`;

// ─── 6. Форма с предупреждением ──────────────────────────────────────────────

export const ex06: MockupDoc = dsl(
  stack({
    direction: "vertical",
    gap: 16,
    children: [
      alert({ variant: "warning", text: text("Please fill in all required fields before submitting.") }),
      form({
        fields: [
          field({ key: "title",    component: "textInput", label: text("Title"),       required: true }),
          field({ key: "category", component: "select",    label: text("Category"),    required: true,
                  options: [text("Bug"), text("Feature"), text("Question")] }),
          field({ key: "body",     component: "textArea",  label: text("Description"), required: true }),
        ],
        actions: actionBar([
          button({ label: text("Submit"), variant: "primary", action: actionRef("submit") }),
          button({ label: text("Cancel"), variant: "ghost",   action: actionRef("cancel") }),
        ]),
      }),
    ],
  })
);

export const ex06Code = `\
import { dsl, stack, alert, form, field, actionBar, button, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  stack({
    direction: "vertical",
    gap: 16,
    children: [
      alert({ variant: "warning", text: text("Please fill in all required fields before submitting.") }),
      form({
        fields: [
          field({ key: "title",    component: "textInput", label: text("Title"),       required: true }),
          field({ key: "category", component: "select",    label: text("Category"),    required: true,
                  options: [text("Bug"), text("Feature"), text("Question")] }),
          field({ key: "body",     component: "textArea",  label: text("Description"), required: true }),
        ],
        actions: actionBar([
          button({ label: text("Submit"), variant: "primary", action: actionRef("submit") }),
          button({ label: text("Cancel"), variant: "ghost",   action: actionRef("cancel") }),
        ]),
      }),
    ],
  })
);`;

// ─── 7. Split 1/2 — форма и превью рядом ─────────────────────────────────────

export const ex07: MockupDoc = dsl(
  split({
    ratio: 0.5,
    left: form({
      fields: [
        field({ key: "name",     component: "textInput",   label: text("Product name"), required: true }),
        field({ key: "price",    component: "numericInput", label: text("Price, $"),     required: true }),
        field({ key: "category", component: "select",       label: text("Category"),
                options: [text("Electronics"), text("Clothing"), text("Food")] }),
        field({ key: "active",   component: "switch",       label: text("Active") }),
      ],
      actions: actionBar([
        button({ label: text("Save"), variant: "primary", action: actionRef("save") }),
      ]),
    }),
    right: card({
      title: text("Preview"),
      content: stack({
        direction: "vertical",
        gap: 8,
        children: [
          stat({ label: text("Name"),     value: "Product name" }),
          stat({ label: text("Price"),    value: "$0.00" }),
          stat({ label: text("Category"), value: "—" }),
          badge({ text: text("Inactive") }),
        ],
      }),
    }),
  })
);

export const ex07Code = `\
import { dsl, split, form, field, card, stack, stat, badge,
         actionBar, button, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  split({
    ratio: 0.5,
    left: form({
      fields: [
        field({ key: "name",     component: "textInput",   label: text("Product name"), required: true }),
        field({ key: "price",    component: "numericInput", label: text("Price, $"),     required: true }),
        field({ key: "category", component: "select",       label: text("Category"),
                options: [text("Electronics"), text("Clothing"), text("Food")] }),
        field({ key: "active",   component: "switch",       label: text("Active") }),
      ],
      actions: actionBar([
        button({ label: text("Save"), variant: "primary", action: actionRef("save") }),
      ]),
    }),
    right: card({
      title: text("Preview"),
      content: stack({
        direction: "vertical",
        gap: 8,
        children: [
          stat({ label: text("Name"),     value: "Product name" }),
          stat({ label: text("Price"),    value: "$0.00" }),
          stat({ label: text("Category"), value: "—" }),
          badge({ text: text("Inactive") }),
        ],
      }),
    }),
  })
);`;

// ─── 8. Split 2/3 — основной контент и боковая панель ────────────────────────

export const ex08: MockupDoc = dsl(
  split({
    ratio: 0.33,
    left: stack({
      direction: "vertical",
      gap: 12,
      children: [
        card({
          title: text("Summary"),
          content: stack({
            direction: "vertical",
            gap: 8,
            children: [
              stat({ label: text("Status"),  value: "Active" }),
              stat({ label: text("Created"), value: "2026-01-15" }),
              stat({ label: text("Owner"),   value: "Anna K." }),
            ],
          }),
        }),
        alert({ variant: "info", text: text("Last synced 3 minutes ago.") }),
      ],
    }),
    right: card({
      title: text("Transactions"),
      content: table({
        dataSource: dataSourceRef("transactions"),
        columns: [text("Date"), text("Description"), text("Amount"), text("Status")],
      }),
    }),
  })
);

export const ex08Code = `\
import { dsl, split, stack, card, stat, alert, table, dataSourceRef, text } from "@open-mockup/dsl";

export default dsl(
  split({
    ratio: 0.33,
    left: stack({
      direction: "vertical",
      gap: 12,
      children: [
        card({
          title: text("Summary"),
          content: stack({
            direction: "vertical",
            gap: 8,
            children: [
              stat({ label: text("Status"),  value: "Active" }),
              stat({ label: text("Created"), value: "2026-01-15" }),
              stat({ label: text("Owner"),   value: "Anna K." }),
            ],
          }),
        }),
        alert({ variant: "info", text: text("Last synced 3 minutes ago.") }),
      ],
    }),
    right: card({
      title: text("Transactions"),
      content: table({
        dataSource: dataSourceRef("transactions"),
        columns: [text("Date"), text("Description"), text("Amount"), text("Status")],
      }),
    }),
  })
);`;

// ─── 9. Таблица с заголовком и пагинацией ────────────────────────────────────

export const ex09: MockupDoc = dsl(
  stack({
    direction: "vertical",
    gap: 16,
    children: [
      section({
        title: text("Users"),
        content: actionBar([
          button({ label: text("Add user"),   variant: "primary",   action: actionRef("addUser") }),
          button({ label: text("Export CSV"), variant: "secondary", action: actionRef("export") }),
          iconButton({ icon: "filter", label: text("Filters"), action: actionRef("openFilters") }),
        ]),
      }),
      table({
        dataSource: dataSourceRef("users"),
        columns: [text("Name"), text("Email"), text("Role"), text("Status"), text("Created")],
      }),
      pagination({ page: 1, pageSize: 25, total: 348 }),
    ],
  })
);

export const ex09Code = `\
import { dsl, stack, section, actionBar, button, iconButton, table,
         pagination, dataSourceRef, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  stack({
    direction: "vertical",
    gap: 16,
    children: [
      section({
        title: text("Users"),
        content: actionBar([
          button({ label: text("Add user"),   variant: "primary",   action: actionRef("addUser") }),
          button({ label: text("Export CSV"), variant: "secondary", action: actionRef("export") }),
          iconButton({ icon: "filter", label: text("Filters"), action: actionRef("openFilters") }),
        ]),
      }),
      table({
        dataSource: dataSourceRef("users"),
        columns: [text("Name"), text("Email"), text("Role"), text("Status"), text("Created")],
      }),
      pagination({ page: 1, pageSize: 25, total: 348 }),
    ],
  })
);`;

// ─── 10. Дашборд: метрики + чарт + таблица ───────────────────────────────────

export const ex10: MockupDoc = dsl(
  stack({
    direction: "vertical",
    gap: 24,
    children: [
      grid({
        columns: 4,
        children: [
          stat({ label: text("Revenue"),     value: "$124 800" }),
          stat({ label: text("Orders"),      value: 3210 }),
          stat({ label: text("Avg. order"),  value: "$38.90" }),
          stat({ label: text("Return rate"), value: "2.4%" }),
        ],
      }),
      card({
        title: text("Revenue over time"),
        content: chart({ chartType: "line" }),
      }),
      card({
        title: text("Top products"),
        content: table({
          dataSource: dataSourceRef("topProducts"),
          columns: [text("Product"), text("Category"), text("Sales"), text("Revenue")],
        }),
      }),
    ],
  })
);

export const ex10Code = `\
import { dsl, stack, grid, stat, chart, card, table, dataSourceRef, text } from "@open-mockup/dsl";

export default dsl(
  stack({
    direction: "vertical",
    gap: 24,
    children: [
      grid({
        columns: 4,
        children: [
          stat({ label: text("Revenue"),     value: "$124 800" }),
          stat({ label: text("Orders"),      value: 3210 }),
          stat({ label: text("Avg. order"),  value: "$38.90" }),
          stat({ label: text("Return rate"), value: "2.4%" }),
        ],
      }),
      card({
        title: text("Revenue over time"),
        content: chart({ chartType: "line" }),
      }),
      card({
        title: text("Top products"),
        content: table({
          dataSource: dataSourceRef("topProducts"),
          columns: [text("Product"), text("Category"), text("Sales"), text("Revenue")],
        }),
      }),
    ],
  })
);`;

// ─── 11. Вкладки с разным контентом ──────────────────────────────────────────

export const ex11: MockupDoc = dsl(
  stack({
    direction: "vertical",
    gap: 12,
    children: [
      tabs({ tabs: [text("Members"), text("Settings")], active: 0 }),
      card({
        title: text("Members"),
        content: table({
          dataSource: dataSourceRef("members"),
          columns: [text("Name"), text("Role"), text("Joined"), text("Status")],
        }),
      }),
      card({
        title: text("Settings"),
        content: form({
          fields: [
            field({ key: "teamName",   component: "textInput", label: text("Team name"),  required: true }),
            field({ key: "visibility", component: "select",    label: text("Visibility"),
                    options: [text("Public"), text("Private"), text("Invite-only")] }),
            field({ key: "allowGuests", component: "switch",   label: text("Allow guests") }),
          ],
          actions: actionBar([
            button({ label: text("Save settings"), variant: "primary", action: actionRef("save") }),
          ]),
        }),
      }),
    ],
  })
);

export const ex11Code = `\
import { dsl, stack, tabs, card, table, form, field, actionBar, button,
         dataSourceRef, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  stack({
    direction: "vertical",
    gap: 12,
    children: [
      tabs({ tabs: [text("Members"), text("Settings")], active: 0 }),
      card({
        title: text("Members"),
        content: table({
          dataSource: dataSourceRef("members"),
          columns: [text("Name"), text("Role"), text("Joined"), text("Status")],
        }),
      }),
      card({
        title: text("Settings"),
        content: form({
          fields: [
            field({ key: "teamName",    component: "textInput", label: text("Team name"),  required: true }),
            field({ key: "visibility",  component: "select",    label: text("Visibility"),
                    options: [text("Public"), text("Private"), text("Invite-only")] }),
            field({ key: "allowGuests", component: "switch",    label: text("Allow guests") }),
          ],
          actions: actionBar([
            button({ label: text("Save settings"), variant: "primary", action: actionRef("save") }),
          ]),
        }),
      }),
    ],
  })
);`;

// ─── 12. Sidebar-навигация + контент ─────────────────────────────────────────

export const ex12: MockupDoc = dsl(
  split({
    ratio: 0.22,
    left: sidebarNav({
      activeKey: "orders",
      items: [
        navItem({ key: "overview",  label: text("Overview") }),
        navItem({ key: "orders",    label: text("Orders") }),
        navItem({ key: "products",  label: text("Products") }),
        navItem({ key: "customers", label: text("Customers") }),
        navItem({ key: "reports",   label: text("Reports") }),
      ],
    }),
    right: stack({
      direction: "vertical",
      gap: 16,
      children: [
        section({
          title: text("Orders"),
          content: table({
            dataSource: dataSourceRef("orders"),
            columns: [text("ID"), text("Customer"), text("Total"), text("Status"), text("Date")],
          }),
        }),
      ],
    }),
  })
);

export const ex12Code = `\
import { dsl, split, sidebarNav, navItem, stack, section, table,
         dataSourceRef, text } from "@open-mockup/dsl";

export default dsl(
  split({
    ratio: 0.22,
    left: sidebarNav({
      activeKey: "orders",
      items: [
        navItem({ key: "overview",  label: text("Overview") }),
        navItem({ key: "orders",    label: text("Orders") }),
        navItem({ key: "products",  label: text("Products") }),
        navItem({ key: "customers", label: text("Customers") }),
        navItem({ key: "reports",   label: text("Reports") }),
      ],
    }),
    right: stack({
      direction: "vertical",
      gap: 16,
      children: [
        section({
          title: text("Orders"),
          content: table({
            dataSource: dataSourceRef("orders"),
            columns: [text("ID"), text("Customer"), text("Total"), text("Status"), text("Date")],
          }),
        }),
      ],
    }),
  })
);`;

// ─── 13. Модальное окно с формой подтверждения ───────────────────────────────

export const ex13: MockupDoc = dsl(
  modal({
    title: text("Delete account"),
    content: stack({
      direction: "vertical",
      gap: 16,
      children: [
        alert({ variant: "error", text: text("This action is permanent and cannot be undone.") }),
        form({
          fields: [
            field({ key: "confirm", component: "textInput",
                    label: text("Type DELETE to confirm"), required: true }),
          ],
          actions: actionBar([
            button({ label: text("Delete permanently"), variant: "primary",
                     action: actionRef("deleteAccount") }),
            linkAction({ label: text("Cancel"), action: actionRef("cancel") }),
          ]),
        }),
      ],
    }),
  })
);

export const ex13Code = `\
import { dsl, modal, stack, alert, form, field, actionBar, button,
         linkAction, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  modal({
    title: text("Delete account"),
    content: stack({
      direction: "vertical",
      gap: 16,
      children: [
        alert({ variant: "error", text: text("This action is permanent and cannot be undone.") }),
        form({
          fields: [
            field({ key: "confirm", component: "textInput",
                    label: text("Type DELETE to confirm"), required: true }),
          ],
          actions: actionBar([
            button({ label: text("Delete permanently"), variant: "primary",
                     action: actionRef("deleteAccount") }),
            linkAction({ label: text("Cancel"), action: actionRef("cancel") }),
          ]),
        }),
      ],
    }),
  })
);`;

// ─── 14. Мастер (Wizard) — многошаговая форма ────────────────────────────────

export const ex14: MockupDoc = dsl(
  stack({
    direction: "vertical",
    gap: 20,
    children: [
      breadcrumb({
        items: [text("Company info"), text("Contact details"), text("Plan"), text("Review")],
      }),
      progress({ value: 25 }),
      card({
        title: text("Step 1 — Company info"),
        content: form({
          fields: [
            field({ key: "company",  component: "textInput",  label: text("Company name"), required: true }),
            field({ key: "industry", component: "select",     label: text("Industry"),     required: true,
                    options: [text("Technology"), text("Finance"), text("Healthcare"), text("Retail")] }),
            field({ key: "size",     component: "radioGroup", label: text("Company size"),
                    options: [text("1–10"), text("11–50"), text("51–200"), text("200+")] }),
            field({ key: "website",  component: "textInput",  label: text("Website") }),
          ],
          actions: actionBar([
            button({ label: text("Next →"), variant: "primary", action: actionRef("nextStep") }),
            button({ label: text("Cancel"), variant: "ghost",   action: actionRef("cancel") }),
          ]),
        }),
      }),
    ],
  })
);

export const ex14Code = `\
import { dsl, stack, breadcrumb, progress, card, form, field,
         actionBar, button, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  stack({
    direction: "vertical",
    gap: 20,
    children: [
      breadcrumb({
        items: [text("Company info"), text("Contact details"), text("Plan"), text("Review")],
      }),
      progress({ value: 25 }),
      card({
        title: text("Step 1 — Company info"),
        content: form({
          fields: [
            field({ key: "company",  component: "textInput",  label: text("Company name"), required: true }),
            field({ key: "industry", component: "select",     label: text("Industry"),     required: true,
                    options: [text("Technology"), text("Finance"), text("Healthcare"), text("Retail")] }),
            field({ key: "size",     component: "radioGroup", label: text("Company size"),
                    options: [text("1–10"), text("11–50"), text("51–200"), text("200+")] }),
            field({ key: "website",  component: "textInput",  label: text("Website") }),
          ],
          actions: actionBar([
            button({ label: text("Next →"), variant: "primary", action: actionRef("nextStep") }),
            button({ label: text("Cancel"), variant: "ghost",   action: actionRef("cancel") }),
          ]),
        }),
      }),
    ],
  })
);`;

// ─── 15. Список с фильтрами, сегментом и пагинацией ──────────────────────────

export const ex15: MockupDoc = dsl({
  title: text("Orders"),
  layout: stack({
    direction: "vertical",
    gap: 16,
    children: [
      section({
        title: text("Orders"),
        content: split({
          ratio: 0.65,
          left: actionBar([
            button({ label: text("New order"), variant: "primary",   action: actionRef("newOrder") }),
            button({ label: text("Export"),    variant: "secondary", action: actionRef("export") }),
          ]),
          right: segmentedButton({
            activeKey: "list",
            items: [
              segmentedItem({ key: "list", label: text("List") }),
              segmentedItem({ key: "grid", label: text("Grid") }),
            ],
          }),
        }),
      }),
      form({
        fields: [
          field({ key: "search",   component: "searchInput",  label: text("Search"), placeholder: "Order ID or customer" }),
          field({ key: "status",   component: "multiSelect",  label: text("Status"),
                  options: [text("New"), text("Processing"), text("Shipped"), text("Delivered")] }),
          field({ key: "dateFrom", component: "dateInput",    label: text("Date from") }),
          field({ key: "dateTo",   component: "dateInput",    label: text("Date to") }),
        ],
        actions: actionBar([
          button({ label: text("Apply"), variant: "primary", action: actionRef("apply") }),
          button({ label: text("Reset"), variant: "ghost",   action: actionRef("reset") }),
        ]),
      }),
      table({
        dataSource: dataSourceRef("orders"),
        columns: [text("ID"), text("Customer"), text("Date"), text("Items"), text("Total"), text("Status")],
      }),
      pagination({ page: 1, pageSize: 20, total: 1240 }),
    ],
  }),
});

export const ex15Code = `\
import { dsl, stack, section, split, segmentedButton, segmentedItem,
         actionBar, button, form, field, table, pagination,
         dataSourceRef, text, actionRef } from "@open-mockup/dsl";

export default dsl({
  title: text("Orders"),
  layout: stack({
    direction: "vertical",
    gap: 16,
    children: [
      section({
        title: text("Orders"),
        content: split({
          ratio: 0.65,
          left: actionBar([
            button({ label: text("New order"), variant: "primary",   action: actionRef("newOrder") }),
            button({ label: text("Export"),    variant: "secondary", action: actionRef("export") }),
          ]),
          right: segmentedButton({
            activeKey: "list",
            items: [
              segmentedItem({ key: "list", label: text("List") }),
              segmentedItem({ key: "grid", label: text("Grid") }),
            ],
          }),
        }),
      }),
      form({
        fields: [
          field({ key: "search",   component: "searchInput", label: text("Search"), placeholder: "Order ID or customer" }),
          field({ key: "status",   component: "multiSelect", label: text("Status"),
                  options: [text("New"), text("Processing"), text("Shipped"), text("Delivered")] }),
          field({ key: "dateFrom", component: "dateInput",   label: text("Date from") }),
          field({ key: "dateTo",   component: "dateInput",   label: text("Date to") }),
        ],
        actions: actionBar([
          button({ label: text("Apply"), variant: "primary", action: actionRef("apply") }),
          button({ label: text("Reset"), variant: "ghost",   action: actionRef("reset") }),
        ]),
      }),
      table({
        dataSource: dataSourceRef("orders"),
        columns: [text("ID"), text("Customer"), text("Date"), text("Items"), text("Total"), text("Status")],
      }),
      pagination({ page: 1, pageSize: 20, total: 1240 }),
    ],
  }),
});`;

// ─── 16. Детальная страница заказа ───────────────────────────────────────────

export const ex16: MockupDoc = dsl({
  title: text("Order #1042"),
  layout: stack({
    direction: "vertical",
    gap: 20,
    children: [
      breadcrumb({ items: [text("Orders"), text("#1042")] }),
      split({
        ratio: 0.28,
        left: section({
          title: text("Order summary"),
          content: stack({
            direction: "vertical",
            gap: 10,
            children: [
              stat({ label: text("Status"),  value: "Shipped" }),
              stat({ label: text("Total"),   value: "$320.00" }),
              stat({ label: text("Items"),   value: 4 }),
              badge({ text: text("Express") }),
              alert({ variant: "info", text: text("Est. delivery in 2 days") }),
            ],
          }),
        }),
        right: stack({
          direction: "vertical",
          gap: 12,
          children: [
            tabs({ tabs: [text("Line items"), text("Edit delivery")], active: 0 }),
            card({
              title: text("Items"),
              content: table({
                dataSource: dataSourceRef("order.items"),
                columns: [text("Product"), text("Qty"), text("Price"), text("Subtotal")],
              }),
            }),
            card({
              title: text("Edit delivery"),
              content: form({
                fields: [
                  field({ key: "recipient", component: "textInput", label: text("Recipient"), required: true }),
                  field({ key: "address",   component: "textArea",  label: text("Address"),   required: true }),
                  field({ key: "notes",     component: "textArea",  label: text("Notes") }),
                ],
                actions: actionBar([
                  button({ label: text("Save"),    variant: "primary", action: actionRef("save") }),
                  button({ label: text("Discard"), variant: "ghost" }),
                ]),
              }),
            }),
            actionBar([
              button({ label: text("Confirm shipment"), variant: "primary", action: actionRef("confirm") }),
              linkAction({ label: text("Cancel order"), action: actionRef("cancel") }),
            ]),
          ],
        }),
      }),
    ],
  }),
});

export const ex16Code = `\
import { dsl, stack, breadcrumb, split, section, stat, badge, alert,
         tabs, card, table, form, field, actionBar, button, linkAction,
         dataSourceRef, text, actionRef } from "@open-mockup/dsl";

export default dsl({
  title: text("Order #1042"),
  layout: stack({
    direction: "vertical",
    gap: 20,
    children: [
      breadcrumb({ items: [text("Orders"), text("#1042")] }),
      split({
        ratio: 0.28,
        left: section({
          title: text("Order summary"),
          content: stack({
            direction: "vertical",
            gap: 10,
            children: [
              stat({ label: text("Status"),  value: "Shipped" }),
              stat({ label: text("Total"),   value: "$320.00" }),
              stat({ label: text("Items"),   value: 4 }),
              badge({ text: text("Express") }),
              alert({ variant: "info", text: text("Est. delivery in 2 days") }),
            ],
          }),
        }),
        right: stack({
          direction: "vertical",
          gap: 12,
          children: [
            tabs({ tabs: [text("Line items"), text("Edit delivery")], active: 0 }),
            card({
              title: text("Items"),
              content: table({
                dataSource: dataSourceRef("order.items"),
                columns: [text("Product"), text("Qty"), text("Price"), text("Subtotal")],
              }),
            }),
            card({
              title: text("Edit delivery"),
              content: form({
                fields: [
                  field({ key: "recipient", component: "textInput", label: text("Recipient"), required: true }),
                  field({ key: "address",   component: "textArea",  label: text("Address"),   required: true }),
                  field({ key: "notes",     component: "textArea",  label: text("Notes") }),
                ],
                actions: actionBar([
                  button({ label: text("Save"),    variant: "primary", action: actionRef("save") }),
                  button({ label: text("Discard"), variant: "ghost" }),
                ]),
              }),
            }),
            actionBar([
              button({ label: text("Confirm shipment"), variant: "primary", action: actionRef("confirm") }),
              linkAction({ label: text("Cancel order"), action: actionRef("cancel") }),
            ]),
          ],
        }),
      }),
    ],
  }),
});`;

// ─── 17. Настройки — sidebar + секции с формами ──────────────────────────────

export const ex17: MockupDoc = dsl({
  title: text("Settings"),
  layout: split({
    ratio: 0.22,
    left: sidebarNav({
      activeKey: "profile",
      items: [
        navItem({ key: "profile",       label: text("Profile") }),
        navItem({ key: "security",      label: text("Security") }),
        navItem({ key: "notifications", label: text("Notifications") }),
        navItem({ key: "billing",       label: text("Billing") }),
        navItem({ key: "integrations",  label: text("Integrations") }),
      ],
    }),
    right: stack({
      direction: "vertical",
      gap: 24,
      children: [
        section({
          title: text("Personal info"),
          content: form({
            fields: [
              field({ key: "firstName", component: "textInput", label: text("First name"), required: true }),
              field({ key: "lastName",  component: "textInput", label: text("Last name"),  required: true }),
              field({ key: "email",     component: "textInput", label: text("Email"),      required: true }),
              field({ key: "bio",       component: "textArea",  label: text("Bio") }),
            ],
            actions: actionBar([
              button({ label: text("Save changes"), variant: "primary", action: actionRef("saveProfile") }),
            ]),
          }),
        }),
        section({
          title: text("Preferences"),
          content: form({
            fields: [
              field({ key: "language",   component: "select",   label: text("Language"),
                      options: [text("English"), text("Russian"), text("German")] }),
              field({ key: "timezone",   component: "select",   label: text("Timezone"),
                      options: [text("UTC"), text("UTC+3"), text("UTC+5")] }),
              field({ key: "darkMode",   component: "switch",   label: text("Dark mode") }),
              field({ key: "newsletter", component: "checkbox", label: text("Subscribe to newsletter") }),
            ],
            actions: actionBar([
              button({ label: text("Save preferences"), variant: "primary", action: actionRef("savePrefs") }),
            ]),
          }),
        }),
      ],
    }),
  }),
});

export const ex17Code = `\
import { dsl, split, sidebarNav, navItem, stack, section, form, field,
         actionBar, button, text, actionRef } from "@open-mockup/dsl";

export default dsl({
  title: text("Settings"),
  layout: split({
    ratio: 0.22,
    left: sidebarNav({
      activeKey: "profile",
      items: [
        navItem({ key: "profile",       label: text("Profile") }),
        navItem({ key: "security",      label: text("Security") }),
        navItem({ key: "notifications", label: text("Notifications") }),
        navItem({ key: "billing",       label: text("Billing") }),
        navItem({ key: "integrations",  label: text("Integrations") }),
      ],
    }),
    right: stack({
      direction: "vertical",
      gap: 24,
      children: [
        section({
          title: text("Personal info"),
          content: form({
            fields: [
              field({ key: "firstName", component: "textInput", label: text("First name"), required: true }),
              field({ key: "lastName",  component: "textInput", label: text("Last name"),  required: true }),
              field({ key: "email",     component: "textInput", label: text("Email"),      required: true }),
              field({ key: "bio",       component: "textArea",  label: text("Bio") }),
            ],
            actions: actionBar([
              button({ label: text("Save changes"), variant: "primary", action: actionRef("saveProfile") }),
            ]),
          }),
        }),
        section({
          title: text("Preferences"),
          content: form({
            fields: [
              field({ key: "language",   component: "select",   label: text("Language"),
                      options: [text("English"), text("Russian"), text("German")] }),
              field({ key: "darkMode",   component: "switch",   label: text("Dark mode") }),
              field({ key: "newsletter", component: "checkbox", label: text("Subscribe to newsletter") }),
            ],
            actions: actionBar([
              button({ label: text("Save preferences"), variant: "primary", action: actionRef("savePrefs") }),
            ]),
          }),
        }),
      ],
    }),
  }),
});`;

// ─── 18. Главная — topNav + KPI + чарты + таблица ────────────────────────────

export const ex18: MockupDoc = dsl({
  title: text("Portal"),
  layout: stack({
    direction: "vertical",
    gap: 24,
    children: [
      topNav({
        brand: text("Acme Corp"),
        activeKey: "dashboard",
        items: [
          navItem({ key: "dashboard", label: text("Dashboard") }),
          navItem({ key: "orders",    label: text("Orders") }),
          navItem({ key: "products",  label: text("Products") }),
          navItem({ key: "reports",   label: text("Reports") }),
        ],
      }),
      grid({
        columns: 4,
        children: [
          stat({ label: text("Revenue MTD"),     value: "$84 320" }),
          stat({ label: text("Orders today"),    value: 142 }),
          stat({ label: text("Active users"),    value: 2810 }),
          stat({ label: text("Support tickets"), value: 23 }),
        ],
      }),
      split({
        ratio: 0.6,
        left:  card({ title: text("Sales trend"),    content: chart({ chartType: "line" }) }),
        right: card({ title: text("By category"),    content: chart({ chartType: "pie" }) }),
      }),
      card({
        title: text("Recent orders"),
        content: table({
          dataSource: dataSourceRef("recentOrders"),
          columns: [text("ID"), text("Customer"), text("Product"), text("Total"), text("Status")],
        }),
      }),
    ],
  }),
});

export const ex18Code = `\
import { dsl, stack, topNav, navItem, grid, stat, split, card, chart,
         table, dataSourceRef, text } from "@open-mockup/dsl";

export default dsl({
  title: text("Portal"),
  layout: stack({
    direction: "vertical",
    gap: 24,
    children: [
      topNav({
        brand: text("Acme Corp"),
        activeKey: "dashboard",
        items: [
          navItem({ key: "dashboard", label: text("Dashboard") }),
          navItem({ key: "orders",    label: text("Orders") }),
          navItem({ key: "products",  label: text("Products") }),
          navItem({ key: "reports",   label: text("Reports") }),
        ],
      }),
      grid({
        columns: 4,
        children: [
          stat({ label: text("Revenue MTD"),     value: "$84 320" }),
          stat({ label: text("Orders today"),    value: 142 }),
          stat({ label: text("Active users"),    value: 2810 }),
          stat({ label: text("Support tickets"), value: 23 }),
        ],
      }),
      split({
        ratio: 0.6,
        left:  card({ title: text("Sales trend"), content: chart({ chartType: "line" }) }),
        right: card({ title: text("By category"), content: chart({ chartType: "pie" }) }),
      }),
      card({
        title: text("Recent orders"),
        content: table({
          dataSource: dataSourceRef("recentOrders"),
          columns: [text("ID"), text("Customer"), text("Product"), text("Total"), text("Status")],
        }),
      }),
    ],
  }),
});`;

// ─── 19. Правый drawer с деталями записи ─────────────────────────────────────

export const ex19: MockupDoc = dsl(
  drawer({
    side: "right",
    content: stack({
      direction: "vertical",
      gap: 16,
      children: [
        section({
          title: text("Ticket #4821"),
          content: stack({
            direction: "vertical",
            gap: 8,
            children: [
              stat({ label: text("Status"),   value: "Open" }),
              stat({ label: text("Priority"), value: "High" }),
              stat({ label: text("Assignee"), value: "Mark D." }),
              badge({ text: text("Bug") }),
              alert({ variant: "warning", text: text("No activity for 5 days") }),
            ],
          }),
        }),
        form({
          fields: [
            field({ key: "comment", component: "textArea", label: text("Add comment") }),
          ],
          actions: actionBar([
            button({ label: text("Resolve"),  variant: "primary",   action: actionRef("resolve") }),
            button({ label: text("Reassign"), variant: "secondary", action: actionRef("reassign") }),
          ]),
        }),
      ],
    }),
  })
);

export const ex19Code = `\
import { dsl, drawer, stack, section, stat, badge, alert, form, field,
         actionBar, button, text, actionRef } from "@open-mockup/dsl";

export default dsl(
  drawer({
    side: "right",
    content: stack({
      direction: "vertical",
      gap: 16,
      children: [
        section({
          title: text("Ticket #4821"),
          content: stack({
            direction: "vertical",
            gap: 8,
            children: [
              stat({ label: text("Status"),   value: "Open" }),
              stat({ label: text("Priority"), value: "High" }),
              stat({ label: text("Assignee"), value: "Mark D." }),
              badge({ text: text("Bug") }),
              alert({ variant: "warning", text: text("No activity for 5 days") }),
            ],
          }),
        }),
        form({
          fields: [
            field({ key: "comment", component: "textArea", label: text("Add comment") }),
          ],
          actions: actionBar([
            button({ label: text("Resolve"),  variant: "primary",   action: actionRef("resolve") }),
            button({ label: text("Reassign"), variant: "secondary", action: actionRef("reassign") }),
          ]),
        }),
      ],
    }),
  })
);`;

// ─── 20. Полный CRM-экран ─────────────────────────────────────────────────────

export const ex20: MockupDoc = dsl({
  title: text("Deals — CRM"),
  layout: stack({
    direction: "vertical",
    gap: 0,
    children: [
      topNav({
        brand: text("CRM"),
        activeKey: "deals",
        items: [
          navItem({ key: "dashboard",  label: text("Dashboard") }),
          navItem({ key: "deals",      label: text("Deals") }),
          navItem({ key: "contacts",   label: text("Contacts") }),
          navItem({ key: "companies",  label: text("Companies") }),
        ],
      }),
      split({
        ratio: 0.18,
        left: sidebarNav({
          activeKey: "all",
          items: [
            navItem({ key: "all",      label: text("All deals") }),
            navItem({ key: "mine",     label: text("My deals") }),
            navItem({ key: "new",      label: text("New") }),
            navItem({ key: "progress", label: text("In progress") }),
            navItem({ key: "won",      label: text("Won") }),
            navItem({ key: "lost",     label: text("Lost") }),
          ],
        }),
        right: split({
          ratio: 0.6,
          left: stack({
            direction: "vertical",
            gap: 12,
            children: [
              section({
                title: text("Deals"),
                content: actionBar([
                  button({ label: text("Add deal"), variant: "primary",   action: actionRef("addDeal") }),
                  button({ label: text("Import"),   variant: "secondary", action: actionRef("import") }),
                ]),
              }),
              grid({
                columns: 3,
                children: [
                  stat({ label: text("Open deals"),  value: 84 }),
                  stat({ label: text("Total value"), value: "$1.2M" }),
                  stat({ label: text("Avg. size"),   value: "$14 300" }),
                ],
              }),
              tabs({ tabs: [text("All"), text("This month"), text("At risk")], active: 0 }),
              table({
                dataSource: dataSourceRef("deals"),
                columns: [text("Deal"), text("Company"), text("Owner"), text("Value"), text("Stage")],
              }),
              pagination({ page: 1, pageSize: 20, total: 84 }),
            ],
          }),
          right: stack({
            direction: "vertical",
            gap: 16,
            children: [
              card({
                title: text("Deal info"),
                content: stack({
                  direction: "vertical",
                  gap: 8,
                  children: [
                    avatar({ name: text("Acme Corp"), size: "md" }),
                    stat({ label: text("Stage"), value: "Proposal" }),
                    stat({ label: text("Value"), value: "$48 000" }),
                    stat({ label: text("Owner"), value: "Sarah M." }),
                    badge({ text: text("Hot") }),
                    alert({ variant: "warning", text: text("No activity for 7 days") }),
                  ],
                }),
              }),
              card({
                title: text("Next step"),
                content: form({
                  fields: [
                    field({ key: "action",  component: "select",   label: text("Action"),
                            options: [text("Send proposal"), text("Schedule call"), text("Follow up")] }),
                    field({ key: "dueDate", component: "dateInput", label: text("Due date") }),
                    field({ key: "note",    component: "textArea", label: text("Note") }),
                  ],
                  actions: actionBar([
                    button({ label: text("Save"), variant: "primary", action: actionRef("saveActivity") }),
                    linkAction({ label: text("Skip"),                 action: actionRef("skip") }),
                  ]),
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  }),
});

export const ex20Code = `\
import { dsl, stack, topNav, navItem, split, sidebarNav, section, grid,
         stat, tabs, table, pagination, card, avatar, badge, alert, form,
         field, actionBar, button, linkAction, dataSourceRef, text, actionRef } from "@open-mockup/dsl";

export default dsl({
  title: text("Deals — CRM"),
  layout: stack({
    direction: "vertical",
    gap: 0,
    children: [
      topNav({ brand: text("CRM"), activeKey: "deals", items: [ /* ... */ ] }),
      split({
        ratio: 0.18,
        left: sidebarNav({ activeKey: "all", items: [ /* ... */ ] }),
        right: split({
          ratio: 0.6,
          left: stack({ direction: "vertical", gap: 12, children: [
            section({ title: text("Deals"), content: actionBar([ /* ... */ ]) }),
            grid({ columns: 3, children: [ /* stats */ ] }),
            tabs({ tabs: [text("All"), text("This month"), text("At risk")], active: 0 }),
            table({ dataSource: dataSourceRef("deals"), columns: [ /* ... */ ] }),
            pagination({ page: 1, pageSize: 20, total: 84 }),
          ]}),
          right: stack({ direction: "vertical", gap: 16, children: [
            card({ title: text("Deal info"), content: stack({ /* ... */ }) }),
            card({ title: text("Next step"), content: form({ /* ... */ }) }),
          ]}),
        }),
      }),
    ],
  }),
});`;
