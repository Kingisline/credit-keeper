import { r as __toESM } from "../_runtime.mjs";
import { t as COMPANY } from "./content-B7CDTo00.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight, n as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Route$8 } from "./capabilities._slug-B20mQhz1.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D0yrABse.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-FCjgwgdN.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
/**
* Thin scroll-progress bar pinned to the top of the viewport.
* Transform-only updates; respects reduced motion.
*/
function ScrollProgress() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
			node.style.transform = `scaleX(${progress})`;
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
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"aria-hidden": true,
		className: "absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[image:var(--gradient-ember)]"
	});
}
var nav = [
	{
		to: "/capabilities",
		label: "Capabilities"
	},
	{
		to: "/work",
		label: "Work"
	},
	{
		to: "/approach",
		label: "Approach"
	},
	{
		to: "/about",
		label: "About"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex h-16 items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex items-center gap-2.5",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-7 place-items-center rounded-md bg-[image:var(--gradient-ember)] text-[13px] font-bold text-primary-foreground",
							children: "H"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[15px] font-semibold tracking-tight",
							children: COMPANY
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 md:flex",
						"aria-label": "Primary",
						children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
							activeProps: { className: "text-foreground" },
							children: item.label
						}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "ml-2 inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20",
							children: ["Start a conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-9 items-center justify-center rounded-md border border-border md:hidden",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "border-t border-border/60 md:hidden",
				"aria-label": "Mobile",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page flex flex-col py-3",
					children: [...nav, {
						to: "/contact",
						label: "Contact"
					}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "rounded-md px-1 py-3 text-base text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: item.label
					}, item.to))
				})
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border/60 bg-surface/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-semibold",
					children: COMPANY
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xs text-sm text-muted-foreground",
					children: "An applied innovation studio. We build what matters, from first insight to measurable outcome."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-muted-foreground hover:text-foreground",
						children: item.label
					}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-muted-foreground hover:text-foreground",
						children: "Contact"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Disciplines"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "SaaS products" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "AI and intelligent systems" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Automation" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Growth" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "IoT" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Medical research innovation" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Responsible practice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Medical research content states its stage and evidence status. It is not medical advice and implies no regulatory approval or clinical claim."
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					COMPANY,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Evidence-led delivery. Accessibility and motion preferences respected." })]
			})
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: "Halcyon Works — Applied Innovation Studio" },
			{
				name: "description",
				content: "Halcyon Works is an applied innovation studio building SaaS products, AI systems, automation, growth programs, IoT and medical research tooling."
			},
			{
				name: "author",
				content: "Halcyon Works"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-8F74jeaZ.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Halcyon Works — Build what matters, end to end" },
		{
			name: "description",
			content: "An applied innovation studio combining product strategy, engineering, AI, automation, growth, IoT and medical research in one integrated team."
		},
		{
			property: "og:title",
			content: "Halcyon Works — Build what matters, end to end"
		},
		{
			property: "og:description",
			content: "One partner across digital products, intelligent systems, connected devices, growth and research innovation."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-D7IkLqmX.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Halcyon Works" },
		{
			name: "description",
			content: "A multidisciplinary applied-innovation studio: product thinkers, engineers, designers, researchers and growth specialists working as one team."
		},
		{
			property: "og:title",
			content: "About — Halcyon Works"
		},
		{
			property: "og:description",
			content: "Our mission, values, disciplines and standards for responsible delivery."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./approach-BJZTHt3h.mjs");
var Route$4 = createFileRoute("/approach")({
	head: () => ({ meta: [
		{ title: "Approach — Halcyon Works" },
		{
			name: "description",
			content: "Discover, design, build, validate and deploy: an evidence-led delivery model with transparent decisions and security-conscious implementation."
		},
		{
			property: "og:title",
			content: "Approach — Halcyon Works"
		},
		{
			property: "og:description",
			content: "How an idea becomes a validated, deployed and measured system."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./capabilities-DbvtkBCB.mjs");
var Route$3 = createFileRoute("/capabilities")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./contact-CDT3Jk6c.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Halcyon Works" },
		{
			name: "description",
			content: "Tell us about your product, AI, automation, growth, IoT or research challenge and we will reply within two working days."
		},
		{
			property: "og:title",
			content: "Contact — Halcyon Works"
		},
		{
			property: "og:description",
			content: "Start a conversation with our applied innovation studio."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./work-Bi2P6yBc.mjs");
var Route$1 = createFileRoute("/work")({
	head: () => ({ meta: [
		{ title: "Work — Halcyon Works" },
		{
			name: "description",
			content: "Selected engagements across medical research, AI, IoT, automation, SaaS and growth, each with the outcome it produced."
		},
		{
			property: "og:title",
			content: "Work — Halcyon Works"
		},
		{
			property: "og:description",
			content: "Evidence of delivery across research, industry, energy and software."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./capabilities.index-DV2S_QBk.mjs");
var Route = createFileRoute("/capabilities/")({
	head: () => ({ meta: [
		{ title: "Capabilities — Halcyon Works" },
		{
			name: "description",
			content: "SaaS product development, AI systems, automation, digital growth, IoT and medical research innovation delivered by one integrated team."
		},
		{
			property: "og:title",
			content: "Capabilities — Halcyon Works"
		},
		{
			property: "og:description",
			content: "Six connected capabilities, each with proof and a clear next step."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var ApproachRoute = Route$4.update({
	id: "/approach",
	path: "/approach",
	getParentRoute: () => Route$7
});
var CapabilitiesRoute = Route$3.update({
	id: "/capabilities",
	path: "/capabilities",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var WorkRoute = Route$1.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$7
});
var CapabilitiesIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => CapabilitiesRoute
});
var CapabilitiesRouteChildren = {
	CapabilitiesSlugRoute: Route$8.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => CapabilitiesRoute
	}),
	CapabilitiesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ApproachRoute,
	CapabilitiesRoute: CapabilitiesRoute._addFileChildren(CapabilitiesRouteChildren),
	ContactRoute,
	WorkRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
