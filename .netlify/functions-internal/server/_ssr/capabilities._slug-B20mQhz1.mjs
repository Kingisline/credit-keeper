import { r as capabilities } from "./content-B7CDTo00.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities._slug-B20mQhz1.js
var $$splitComponentImporter = () => import("./capabilities._slug-BZUJTbKO.mjs");
var Route = createFileRoute("/capabilities/$slug")({
	loader: ({ params }) => {
		const capability = capabilities.find((c) => c.slug === params.slug);
		if (!capability) throw notFound();
		return { capability };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Unavailable — Halcyon Works" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { capability } = loaderData;
		return { meta: [
			{ title: `${capability.name} — Halcyon Works` },
			{
				name: "description",
				content: capability.summary.slice(0, 155)
			},
			{
				property: "og:title",
				content: `${capability.name} — Halcyon Works`
			},
			{
				property: "og:description",
				content: capability.summary.slice(0, 155)
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
