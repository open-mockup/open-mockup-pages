import {
  breadcrumb,
  contextMenu,
  dsl,
  menu,
  menuItem,
  navItem,
  page,
  pagination,
  sidebarNav,
  tabs,
  text,
  topNav,
} from "@openmockup/dsl";
import type { MockupDoc } from "@openmockup/dsl";

// ─── Tabs ─────────────────────────────────────────────────────────────────────

export const tabsBasic: MockupDoc = dsl({
  page: page({
    title: text("Tabs"),
    layout: tabs({
      tabs: [text("Overview"), text("Activity"), text("Settings")],
      active: 0,
    }),
  }),
});

export const tabsBasicCode = `\
import { dsl, page, tabs, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Tabs"),
    layout: tabs({
      tabs: [text("Overview"), text("Activity"), text("Settings")],
      active: 0,
    }),
  }),
});`;

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

export const breadcrumbBasic: MockupDoc = dsl({
  page: page({
    title: text("Breadcrumb"),
    layout: breadcrumb({
      items: [text("Home"), text("Products"), text("Electronics"), text("Laptops")],
    }),
  }),
});

export const breadcrumbBasicCode = `\
import { breadcrumb, dsl, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Breadcrumb"),
    layout: breadcrumb({
      items: [text("Home"), text("Products"), text("Electronics"), text("Laptops")],
    }),
  }),
});`;

// ─── Pagination ───────────────────────────────────────────────────────────────

export const paginationBasic: MockupDoc = dsl({
  page: page({
    title: text("Pagination"),
    layout: pagination({
      page: 3,
      pageSize: 20,
      total: 200,
    }),
  }),
});

export const paginationBasicCode = `\
import { dsl, page, pagination, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Pagination"),
    layout: pagination({
      page: 3,
      pageSize: 20,
      total: 200,
    }),
  }),
});`;

// ─── SidebarNav ───────────────────────────────────────────────────────────────

export const sidebarNavBasic: MockupDoc = dsl({
  page: page({
    title: text("Sidebar navigation"),
    layout: sidebarNav({
      items: [
        navItem({ key: "dashboard", label: text("Dashboard") }),
        navItem({ key: "orders",    label: text("Orders") }),
        navItem({ key: "customers", label: text("Customers") }),
        navItem({ key: "reports",   label: text("Reports") }),
        navItem({ key: "settings",  label: text("Settings") }),
      ],
      activeKey: "orders",
    }),
  }),
});

export const sidebarNavBasicCode = `\
import { dsl, navItem, page, sidebarNav, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Sidebar navigation"),
    layout: sidebarNav({
      items: [
        navItem({ key: "dashboard", label: text("Dashboard") }),
        navItem({ key: "orders",    label: text("Orders") }),
        navItem({ key: "customers", label: text("Customers") }),
        navItem({ key: "reports",   label: text("Reports") }),
        navItem({ key: "settings",  label: text("Settings") }),
      ],
      activeKey: "orders",
    }),
  }),
});`;

// ─── TopNav ───────────────────────────────────────────────────────────────────

export const topNavBasic: MockupDoc = dsl({
  page: page({
    title: text("Top navigation"),
    layout: topNav({
      brand: text("Open Mockup"),
      items: [
        navItem({ key: "home", label: text("Home") }),
        navItem({ key: "orders", label: text("Orders") }),
        navItem({ key: "reports", label: text("Reports") }),
      ],
      activeKey: "orders",
    }),
  }),
});

export const topNavBasicCode = `\
import { dsl, navItem, page, text, topNav } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Top navigation"),
    layout: topNav({
      brand: text("Open Mockup"),
      items: [
        navItem({ key: "home", label: text("Home") }),
        navItem({ key: "orders", label: text("Orders") }),
        navItem({ key: "reports", label: text("Reports") }),
      ],
      activeKey: "orders",
    }),
  }),
});`;

// ─── Menu / ContextMenu ──────────────────────────────────────────────────────

export const menuBasic: MockupDoc = dsl({
  page: page({
    title: text("Menu"),
    layout: menu({
      items: [
        menuItem({ key: "edit", label: text("Edit") }),
        menuItem({ key: "duplicate", label: text("Duplicate") }),
        menuItem({ key: "archive", label: text("Archive") }),
      ],
    }),
  }),
});

export const menuBasicCode = `\
import { dsl, menu, menuItem, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Menu"),
    layout: menu({
      items: [
        menuItem({ key: "edit", label: text("Edit") }),
        menuItem({ key: "duplicate", label: text("Duplicate") }),
        menuItem({ key: "archive", label: text("Archive") }),
      ],
    }),
  }),
});`;

export const contextMenuBasic: MockupDoc = dsl({
  page: page({
    title: text("Context menu"),
    layout: contextMenu({
      triggerLabel: text("Right click row #42"),
      items: [
        menuItem({ key: "open", label: text("Open") }),
        menuItem({ key: "rename", label: text("Rename") }),
        menuItem({ key: "delete", label: text("Delete") }),
      ],
    }),
  }),
});

export const contextMenuBasicCode = `\
import { contextMenu, dsl, menuItem, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Context menu"),
    layout: contextMenu({
      triggerLabel: text("Right click row #42"),
      items: [
        menuItem({ key: "open", label: text("Open") }),
        menuItem({ key: "rename", label: text("Rename") }),
        menuItem({ key: "delete", label: text("Delete") }),
      ],
    }),
  }),
});`;
