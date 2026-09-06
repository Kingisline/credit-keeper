import { t as COMPANY } from "./content-B7CDTo00.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as SectionHeading, i as Section, r as Reveal, t as PageHero } from "./Section-C4rOsKPN.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D7IkLqmX.js
var import_jsx_runtime = require_jsx_runtime();
var disciplines = [
	["Product strategy", "Framing problems, sizing opportunity and defining what success means."],
	["Design", "Interface, interaction and design systems that survive real content."],
	["Engineering", "Web, mobile, backend, data and device-to-cloud implementation."],
	["Applied research", "Evaluation, experimentation and evidence review."],
	["Growth", "Positioning, acquisition, instrumentation and experimentation."],
	["Delivery", "Planning, quality gates and transparent progress."]
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: "A studio built for ambitious, cross-disciplinary work",
			intro: `${COMPANY} exists to make complex technology understandable and to turn ambitious ideas into practical, deployable outcomes.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Mission"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: [
							"For organizations that need to turn ambitious ideas into practical outcomes,",
							" ",
							COMPANY,
							" is an applied innovation studio combining product strategy, software engineering, AI, automation, digital growth, IoT and medical research capabilities. Unlike narrow agencies or disconnected vendors, we connect discovery, development, validation and responsible deployment through one integrated team."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: "We prefer evidence over superlatives. That means benchmarks instead of adjectives, measured outcomes instead of feature counts, and honest boundaries where a technology is not yet ready for the responsibility being asked of it."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				className: "surface-card lg:col-span-5 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Values"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Clarity."
						}), " Complex systems explained without jargon or hype."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Evidence."
						}), " Decisions we can defend with data."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Care."
						}), " Security, privacy and accessibility treated as requirements."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Candour."
						}), " We say what we do not know, and what we will not claim."] })
					]
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/60 bg-surface/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-16 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Disciplines",
					title: "The people in the room",
					intro: "Every engagement is staffed with the mix the problem actually needs."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: disciplines.map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 60,
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: body
						})]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "surface-card p-8 sm:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Collaborate or join us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "We work with founders, innovation teams, operators, growth leaders, hardware teams and research groups. If you want to build something demanding — or help build it — we would like to hear from you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-7 inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
					children: ["Get in touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			]
		}) })
	] });
}
//#endregion
export { AboutPage as component };
