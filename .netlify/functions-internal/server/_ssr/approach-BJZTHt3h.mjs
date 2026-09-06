import { i as principles, n as approachSteps } from "./content-B7CDTo00.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as SectionHeading, i as Section, r as Reveal, t as PageHero } from "./Section-C4rOsKPN.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/approach-BJZTHt3h.js
var import_jsx_runtime = require_jsx_runtime();
function ApproachPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Approach",
			title: "Evidence-led delivery, transparent at every stage",
			intro: "We connect discovery, development, validation and responsible deployment through one team, with a defined output and decision point at each stage."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-5",
			children: approachSteps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				as: "li",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card grid gap-4 p-7 sm:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl text-gradient-ember",
							children: s.step
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-xl font-semibold",
							children: s.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground sm:col-span-9",
						children: s.body
					})]
				})
			}, s.step))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/60 bg-surface/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-16 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Standards",
					title: "The principles we will not trade away",
					intro: "These are enforced at component level, not added at the end of a project."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2",
					children: principles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 70,
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: p.body
						})]
					}, p.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: [
				["Accessibility", "Keyboard operability, visible focus, sufficient contrast, semantic structure and honored motion preferences."],
				["Performance", "Budgets for load, interaction readiness, layout stability, animation consistency and script payload."],
				["Responsible AI and research", "No guaranteed-accuracy claims, no autonomous decisions in high-stakes contexts, no clinical claims."]
			].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 70,
				className: "surface-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: body
				})]
			}, title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
				children: ["Start a conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		})] })
	] });
}
//#endregion
export { ApproachPage as component };
