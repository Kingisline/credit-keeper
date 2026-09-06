import { a as work, n as approachSteps } from "./content-B7CDTo00.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Section, r as Reveal, t as PageHero } from "./Section-C4rOsKPN.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, o as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Route } from "./capabilities._slug-B20mQhz1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities._slug-BZUJTbKO.js
var import_jsx_runtime = require_jsx_runtime();
function CapabilityDetail() {
	const { capability } = Route.useLoaderData();
	const related = work.filter((w) => {
		const key = w.capability.toLowerCase().split(" ")[0] ?? "";
		return key !== "" && capability.name.toLowerCase().includes(key);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Capability",
		title: capability.name,
		intro: capability.summary
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold",
				children: "What the engagement covers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-4",
				children: capability.outcomes.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "surface-card flex gap-4 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm text-primary",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: o
					})]
				}, o))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "How we run it"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 space-y-4 border-l border-border pl-6",
					children: approachSteps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "absolute -left-[1.9rem] top-1.5 size-2.5 rounded-full bg-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display font-semibold",
								children: [
									s.step,
									" · ",
									s.title
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted-foreground",
								children: s.body
							})
						]
					}, s.step))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "surface-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Proof"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: capability.proof
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
							children: [
								capability.cta,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							]
						})
					]
				}),
				related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					className: "surface-card mt-5 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Related work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: r.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: r.metric
						})] }, r.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/capabilities",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All capabilities"]
					})
				})
			]
		})]
	}) })] });
}
//#endregion
export { CapabilityDetail as component };
