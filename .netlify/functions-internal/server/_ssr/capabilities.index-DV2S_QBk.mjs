import { r as capabilities } from "./content-B7CDTo00.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Section, r as Reveal, t as PageHero } from "./Section-C4rOsKPN.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities.index-DV2S_QBk.js
var import_jsx_runtime = require_jsx_runtime();
function CapabilitiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Capabilities",
		title: "Connected capabilities, not disconnected vendors",
		intro: "Each capability is a complete practice. Together they cover the path from an idea to a deployed, measured system."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 lg:grid-cols-2",
		children: capabilities.map((cap, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			delay: i * 60,
			className: "surface-card flex h-full flex-col p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: cap.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: cap.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 flex-1 space-y-2 text-sm text-muted-foreground",
					children: cap.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary"
						}), o]
					}, o))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/capabilities/$slug",
					params: { slug: cap.slug },
					className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
					children: [
						cap.cta,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
					]
				})
			]
		}, cap.slug))
	}) })] });
}
//#endregion
export { CapabilitiesPage as component };
