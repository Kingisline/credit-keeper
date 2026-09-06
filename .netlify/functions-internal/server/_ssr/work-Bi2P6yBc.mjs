import { r as __toESM } from "../_runtime.mjs";
import { a as work } from "./content-B7CDTo00.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as Section, o as cn, r as Reveal, t as PageHero } from "./Section-C4rOsKPN.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-Bi2P6yBc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const filters = (0, import_react.useMemo)(() => ["All", ...new Set(work.map((w) => w.capability))], []);
	const visible = filter === "All" ? work : work.filter((w) => w.capability === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Work",
		title: "Engagements, outcomes and what they proved",
		intro: "We describe what the problem was, what we built and what changed. Filter by capability to find the closest fit."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "group",
			"aria-label": "Filter work by capability",
			className: "flex flex-wrap gap-2",
			children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": filter === f,
				onClick: () => setFilter(f),
				className: cn("rounded-full border px-4 py-2 text-sm transition-colors", filter === f ? "border-primary/60 bg-primary/15 text-primary" : "border-border text-muted-foreground hover:text-foreground"),
				children: f
			}, f))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-5 md:grid-cols-2",
			children: visible.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 60,
				className: "surface-card h-full p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-primary/40 px-2.5 py-1 text-xs text-primary",
							children: item.capability
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: item.industry
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-2xl font-semibold",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: item.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 border-t border-border pt-4 text-sm font-medium text-primary",
						children: item.metric
					})
				]
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
				children: ["Discuss a similar initiative ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		})
	] })] });
}
//#endregion
export { WorkPage as component };
