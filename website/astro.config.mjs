import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import starlightHeadingBadges from 'starlight-heading-badges';

// https://astro.build/config
export default defineConfig({
	site: 'https://dialogueforge.dev',
	contentDir: './src/content',
	integrations: [
		starlight({
			title: 'Dialogue Forge',
			social: {
				discord: 'https://discord.gg/MKRuPZPHGR',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides'},
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference'},
				},
			],
			plugins: [
				starlightBlog({
				  title: 'Devlog',
				}),
				starlightHeadingBadges()
			],
		}),
	],
});