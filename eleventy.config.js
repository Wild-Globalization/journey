import yaml from 'js-yaml';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import { readFileSync } from 'node:fs';
import { IdAttributePlugin } from '@11ty/eleventy';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import settings from './src/_data/settings.js';
import icons from './src/_data/icons.js';

const siteUrl = settings.url.replace(/\/$/, '');
const buildAwesome = JSON.parse(readFileSync(new URL('../package.json', import.meta.resolve('@awesome.me/buildawesome'))));

function absoluteUrl(path = '/') {
	return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	eleventyConfig.ignores.add('src/assets/**/.DS_Store');

	const markdownLib = markdownIt({
		html: true,
		breaks: true,
		linkify: true,
		typographer: true,
	}).use(markdownItAttrs);

	eleventyConfig.setLibrary('md', markdownLib);
	eleventyConfig.addFilter('md', (content) => markdownLib.render(content || ''));
	eleventyConfig.addFilter('mdInline', (content) => markdownLib.renderInline(content || ''));

	eleventyConfig.addPlugin(IdAttributePlugin);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ['webp'],
		widths: [640, 1280, 1920],
		urlPath: '/assets/img/optimized/',
		outputDir: '_site/assets/img/optimized/',
		sharpWebpOptions: { quality: 72 },
		defaultAttributes: {
			loading: 'lazy',
			decoding: 'async',
			sizes: '100vw',
		},
	});

	eleventyConfig.addPassthroughCopy('src/assets/css');
	eleventyConfig.addPassthroughCopy('src/assets/js');
	eleventyConfig.addPassthroughCopy({ 'src/assets/favicons': '/' });
	eleventyConfig.addPassthroughCopy({ 'src/assets/img/course-card.png': 'assets/img/course-card.png' });
	eleventyConfig.addPassthroughCopy({ 'src/assets/img/atlas.svg': 'assets/img/atlas.svg' });
	eleventyConfig.addPassthroughCopy({ 'src/_headers': '_headers' });
	eleventyConfig.addPassthroughCopy({ 'src/xmit.toml': 'xmit.toml' });

	eleventyConfig.addDataExtension('yml,yaml', (contents) => yaml.load(contents));

	eleventyConfig.addGlobalData('buildDate', new Date());
	eleventyConfig.addGlobalData('generator', { name: 'Build.Awesome', version: buildAwesome.version });
	eleventyConfig.addFilter('absoluteUrl', absoluteUrl);
	eleventyConfig.addFilter('fullUrl', absoluteUrl);
	eleventyConfig.addFilter('json', (value) => JSON.stringify(value));
	eleventyConfig.addFilter('year', (value) => new Date(value).getUTCFullYear());
	eleventyConfig.addFilter('isoDate', (value) => new Date(value).toISOString());
	eleventyConfig.addFilter('urlencode', (value) => encodeURIComponent(String(value ?? '')));
	eleventyConfig.addShortcode('currentBuildDate', () => new Date().toISOString());

	// {% icon "books" %} -> one <use> into the sprite in base.njk. Decorative by
	// default; pass a label when the icon is the only thing carrying meaning.
	eleventyConfig.addShortcode('icon', (name, extraClass = '', label = '') => {
		if (!icons[name]) throw new Error(`Unknown icon: ${name}`);
		const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
		const cls = `icon ${extraClass}`.trim();
		return `<svg class="${cls}" ${a11y} viewBox="0 0 256 256"><use href="#i-${name}"></use></svg>`;
	});

	eleventyConfig.addShortcode('iconSprite', () => {
		const symbols = Object.entries(icons)
			.map(([name, body]) => `<symbol id="i-${name}" viewBox="0 0 256 256">${body}</symbol>`)
			.join('');
		return `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">${symbols}</svg>`;
	});
}

export const config = {
	dir: {
		input: 'src',
		output: '_site',
		includes: '_includes',
		data: '_data',
	},
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};
