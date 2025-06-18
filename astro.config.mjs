// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightImageZoom from 'starlight-image-zoom'
import { rehypeLinks } from './plugins/rehype-links';
import { updateFrontmatter } from './plugins/update-frontmatter';
import getSidebar from "./tools/get-sidebar.js"

const base = 'easyquery/javascript/docs';
const site = 'https://korzh.com';
const outDir = './dist/easyquery/javascript/docs';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	outDir,
	trailingSlash: "never",
	integrations: [
		starlight({
			title: 'EasyQuery.JS',
			logo: {
				dark : './src/assets/korzh-docs-white.png',
				light: './src/assets/korzh-docs-black.png',
			},
			favicon: '/favicon.ico',
			social: [],
			sidebar: [
				{ label: "Introduction", slug: "introduction" },
				{ label: "EasyQuery Web Service API", slug: "easyquery-web-service-api" },
				{ label: "Changelog", slug: "changelog" },
				...getSidebar("./src/content/docs/tutorials", true),
				...getSidebar("./src/content/docs/api-reference-7x", true),
				...getSidebar("./src/content/docs/api-reference-old", true),
			],
			customCss: [
				'./src/styles/index.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				Sidebar: './src/components/Sidebar.astro',
			},
			lastUpdated: true,
			plugins: [
				starlightThemeRapide(),
				starlightImageZoom(),
			],
			expressiveCode: {
				themes: ['dark-plus', 'github-light']
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			credits: false,
		}),
	],
	markdown: {
		rehypePlugins: [[rehypeLinks, { base }]],
		remarkPlugins: [updateFrontmatter]
	}
});
