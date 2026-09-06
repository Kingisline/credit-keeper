import { r as __toESM } from "../_runtime.mjs";
import { r as capabilities, t as COMPANY } from "./content-B7CDTo00.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as Section, r as Reveal, t as PageHero } from "./Section-C4rOsKPN.mjs";
import { a as ArrowRight, r as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CDT3Jk6c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Start a conversation",
		intro: `Share the problem, the constraints and the timeline. ${COMPANY} will reply within two working days with a considered next step.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "lg:col-span-7",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 place-items-center rounded-md bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-2xl font-semibold",
						children: "Thank you — message noted"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "This enquiry form is not yet connected to an inbox, so nothing has been sent. Tell us the email address enquiries should go to and we will wire it up."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "surface-card grid gap-5 p-6 sm:p-8",
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							name: "name",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Organisation",
							name: "organisation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "area",
								className: "text-sm font-medium",
								children: "Area of interest"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "area",
								name: "area",
								className: "rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary",
								children: [capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.slug,
									children: c.name
								}, c.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "other",
									children: "Something else"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "message",
							className: "text-sm font-medium",
							children: "What are you trying to achieve?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							name: "message",
							rows: 6,
							required: true,
							className: "rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary",
							placeholder: "Context, constraints, timeline and what success looks like."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "inline-flex items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
						children: ["Send enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				className: "surface-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "What happens next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "1. Reply."
						}), " A considered response within two working days."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "2. Framing call."
						}), " Forty-five minutes to understand the problem and constraints."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "3. Proposal."
						}), " Scope, milestones and evidence gates in writing."] })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 160,
				className: "surface-card mt-5 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Responsible practice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "Medical research enquiries are handled with stage and evidence status stated explicitly. Nothing we publish is medical advice or implies regulatory approval."
				})]
			})]
		})]
	}) })] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: name,
			className: "text-sm font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type,
			required,
			className: "rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
		})]
	});
}
//#endregion
export { ContactPage as component };
