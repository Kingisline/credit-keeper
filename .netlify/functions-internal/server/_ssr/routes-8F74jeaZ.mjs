import { a as work, i as principles, n as approachSteps, r as capabilities } from "./content-B7CDTo00.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as SectionHeading, i as Section, n as Parallax, r as Reveal, s as hero_default } from "./Section-C4rOsKPN.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, i as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-8F74jeaZ.js
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
						speed: .25,
						className: "absolute inset-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_default,
							alt: "",
							width: 1600,
							height: 1e3,
							className: "bg-drift h-full w-full object-cover opacity-60"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklch,var(--background)_45%,transparent),var(--background))]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:py-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Applied innovation studio"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl",
								children: [
									"Build what matters, ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-ember",
										children: "from first insight"
									}),
									" ",
									"to measurable outcome."
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
								children: "Product thinkers, engineers, researchers, designers and growth specialists working as one team across digital products, intelligent systems, connected devices, automation and responsible medical research."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 240,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5",
									children: ["Tell us what you are trying to build ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/work",
									className: "inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
									children: "See the work"
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Why teams choose us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-5 space-y-5",
							children: [
								["One integrated team", "Discovery, delivery, validation and deployment."],
								["Evidence-led", "Decisions defended by data, not opinion or hype."],
								["Responsible by default", "Security-conscious build, clear medical boundaries."]
							].map(([term, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l-2 border-primary/50 pl-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-base font-semibold",
									children: term
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-muted-foreground",
									children: desc
								})]
							}, term))
						})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden border-y border-border/60 bg-surface/30 py-4",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track flex w-max items-center gap-10",
				children: [...capabilities, ...capabilities].map((cap, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-10 whitespace-nowrap font-display text-sm uppercase tracking-[0.22em] text-muted-foreground",
					children: [cap.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary/70" })]
				}, `${cap.slug}-${i}`))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Capabilities",
			title: "Six connected capabilities, one delivery model",
			intro: "Not a generic software agency. Each capability stands on its own and compounds when combined."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: capabilities.map((cap, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/capabilities/$slug",
					params: { slug: cap.slug },
					className: "group flex h-full flex-col surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xs text-primary",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-xl font-semibold",
							children: cap.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
							children: cap.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary",
							children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						})
					]
				})
			}, cap.slug))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/60 bg-surface/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-16 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Approach",
					title: "A path from curiosity to a working outcome",
					intro: "Five stages, each with a defined output and a decision point."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5",
					children: approachSteps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 80,
						as: "li",
						className: "surface-card h-full p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm text-primary",
								children: s.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: s.body
							})
						]
					}, s.step))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Selected work",
				title: "Proof, not promises",
				intro: "A sample of engagements across research, industry, energy and software."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-3",
				children: work.slice(0, 3).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 80,
					className: "surface-card h-full p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: item.capability
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-xl font-semibold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: item.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm font-medium text-primary",
							children: item.metric
						})
					]
				}, item.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work",
					className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline",
					children: ["View all work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2",
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
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-y border-border/60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
					speed: .3,
					className: "absolute inset-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "",
						width: 1600,
						height: 1e3,
						className: "bg-drift h-[130%] w-full object-cover opacity-30"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,var(--background),color-mix(in_oklch,var(--background)_40%,transparent),var(--background))]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page relative py-20 text-center sm:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "In motion"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl",
						children: "Ideas researched, systems engineered, outcomes measured — moving as one."
					})] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "surface-card relative overflow-hidden p-8 text-center sm:p-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-0 bg-veil"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-semibold sm:text-4xl",
							children: "Tell us what you are trying to build."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-muted-foreground",
							children: "Share the problem, the constraint or the idea. We reply within two business days with a considered next step — not a sales sequence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "mt-8 inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
							children: ["Start a conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
