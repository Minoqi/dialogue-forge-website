import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import starlightHeadingBadges from 'starlight-heading-badges';

// https://astro.build/config
export default defineConfig({
	build:{
		site: 'https://minoqi.github.io/',
	  },
	output: 'static', // Ensure this is set to 'static'
	site: 'https://minoqi.github.io/',
	base: 'dialogue-forge-website',
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