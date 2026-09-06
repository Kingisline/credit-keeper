import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-C4rOsKPN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/**
* Content is always in the DOM. Motion is an enhancement: if the observer
* never fires (fast scroll, no JS, reduced motion) the element stays visible.
*/
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			rootMargin: "0px 0px -10% 0px",
			threshold: .1
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", className),
		"data-visible": visible ? "true" : "false",
		style: { ["--reveal-delay"]: `${delay}ms` },
		children
	});
}
/**
* Bounded, transform-only parallax. Disabled on small screens and whenever the
* visitor prefers reduced motion. Never changes layout size, so it cannot
* create horizontal overflow.
*/
function Parallax({ children, speed = .12, className }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
		const small = window.matchMedia("(max-width: 767px)");
		if (reduce.matches || small.matches) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const rect = node.getBoundingClientRect();
			const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
			const offset = Math.max(-60, Math.min(60, progress * speed * 240));
			node.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			if (frame) cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, [speed]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("will-change-transform", className),
		children
	});
}
var hero_default = "/assets/hero-C2hvMNm5.jpg";
function Section({ children, className, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("container-page py-16 sm:py-20 lg:py-24", className),
		children
	});
}
function SectionHeading({ eyebrow, title, intro, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("max-w-2xl", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-semibold sm:text-4xl",
				children: title
			}),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children: intro
			})
		]
	});
}
function PageHero({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden border-b border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
					speed: .2,
					className: "absolute inset-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "",
						width: 1600,
						height: 1e3,
						className: "bg-drift h-full w-full object-cover opacity-25"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklch,var(--background)_55%,transparent),var(--background))]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-veil" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page relative py-16 sm:py-20 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground",
						children: intro
					})
				]
			})
		})]
	});
}
//#endregion
export { SectionHeading as a, Section as i, Parallax as n, cn as o, Reveal as r, hero_default as s, PageHero as t };
