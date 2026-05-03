import {
  actionBar,
  actionRef,
  button,
  dsl,
  field,
  form,
  linkAction,
  page,
  text,
} from "@openmockup/dsl";
import type { MockupDoc } from "@openmockup/dsl";

// ─── All field types ──────────────────────────────────────────────────────────

export const fieldTypes: MockupDoc = dsl({
  page: page({
    title: text("Field components"),
    layout: form({
      fields: [
        field({ key: "name",     component: "textInput",  label: text("Full name"),    required: true, placeholder: "Jane Doe" }),
        field({ key: "bio",      component: "textArea",   label: text("Bio"),          placeholder: "A few words about you…" }),
        field({ key: "country",  component: "select",     label: text("Country"),      required: true, options: [text("USA"), text("UK"), text("Canada")] }),
        field({ key: "channels", component: "multiSelect",label: text("Channels"),     options: [text("Email"), text("SMS"), text("Telegram")] }),
        field({ key: "agree",    component: "checkbox",   label: text("I agree to terms") }),
        field({ key: "gender",   component: "radioGroup", label: text("Gender"),       options: [text("Male"), text("Female"), text("Other")] }),
        field({ key: "notify",   component: "switch",     label: text("Email notifications") }),
        field({ key: "dob",      component: "dateInput",  label: text("Date of birth") }),
      ],
    }),
  }),
});

export const fieldTypesCode = `\
import { dsl, field, form, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Field components"),
    layout: form({
      fields: [
        field({ key: "name",    component: "textInput",  label: text("Full name"),  required: true, placeholder: "Jane Doe" }),
        field({ key: "bio",     component: "textArea",   label: text("Bio"),        placeholder: "A few words about you…" }),
        field({ key: "country", component: "select",     label: text("Country"),    required: true, options: [text("USA"), text("UK"), text("Canada")] }),
        field({ key: "channels",component: "multiSelect",label: text("Channels"),   options: [text("Email"), text("SMS"), text("Telegram")] }),
        field({ key: "agree",   component: "checkbox",   label: text("I agree to terms") }),
        field({ key: "gender",  component: "radioGroup", label: text("Gender"),     options: [text("Male"), text("Female"), text("Other")] }),
        field({ key: "notify",  component: "switch",     label: text("Email notifications") }),
        field({ key: "dob",     component: "dateInput",  label: text("Date of birth") }),
      ],
    }),
  }),
});`;

// ─── Form with actions ────────────────────────────────────────────────────────

export const formWithActions: MockupDoc = dsl({
  page: page({
    title: text("Contact form"),
    layout: form({
      fields: [
        field({ key: "email",   component: "textInput", label: text("Email"),   required: true, placeholder: "you@example.com" }),
        field({ key: "subject", component: "textInput", label: text("Subject"), required: true }),
        field({ key: "body",    component: "textArea",  label: text("Message"), required: true, placeholder: "Describe your issue…" }),
      ],
      actions: actionBar([
        button({ label: text("Send"),   variant: "primary",   action: actionRef("send") }),
        button({ label: text("Cancel"), variant: "secondary" }),
        linkAction({ label: text("Clear form"), action: actionRef("clear") }),
      ]),
    }),
  }),
});

export const formWithActionsCode = `\
import { actionBar, actionRef, button, dsl, field, form, linkAction, page, text } from "@openmockup/dsl";

const doc = dsl({
  page: page({
    title: text("Contact form"),
    layout: form({
      fields: [
        field({ key: "email",   component: "textInput", label: text("Email"),   required: true, placeholder: "you@example.com" }),
        field({ key: "subject", component: "textInput", label: text("Subject"), required: true }),
        field({ key: "body",    component: "textArea",  label: text("Message"), required: true, placeholder: "Describe your issue…" }),
      ],
      actions: actionBar([
        button({ label: text("Send"),   variant: "primary",   action: actionRef("send") }),
        button({ label: text("Cancel"), variant: "secondary" }),
        linkAction({ label: text("Clear form"), action: actionRef("clear") }),
      ]),
    }),
  }),
});`;
