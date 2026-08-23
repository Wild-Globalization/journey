const siteUrl = process.env.URL || 'https://journey.wildglobalization.com/';
const canonicalSiteUrl = siteUrl.replace(/\/$/, '');

export default {
	name: 'Wild Globalization Journey',
	shortName: 'The Journey',
	url: siteUrl,
	canonicalUrl: canonicalSiteUrl,
	locale: 'en_US',
	lang: 'en',
	title: 'Enter the Wild — The Wild Globalization Journey',
	description:
		'A free five-chapter, 26-lesson course on the wild forces shaping human life — from early survival to modern globalization, from small groups to global systems, from human intelligence to AI.',
	image: '/assets/img/course-card.png',
	imageAlt: 'Wild Globalization Pilot course card',
	// @id matches the Person node in thewhitestonefoundation.org/src/_data/schema.json
	// so the two sites describe one person, not two.
	instructor: {
		id: 'https://thewhitestonefoundation.org/team/gary-bedford/#person',
		name: 'Gary Bedford',
		url: 'https://www.garybedford.com/',
		jobTitle: 'Vice President and Board Member, The Whitestone Foundation',
		description:
			'Leads the Wild Globalization Project, reading globalization across the whole human record through theological philosophy, the study of global religions, and a career in wealth management.',
		image: `${canonicalSiteUrl}/assets/img/gary-bedford.jpg`,
		sameAs: [
			'https://www.garybedford.com/',
			'https://wildglobalization.com/',
			'https://explore.wildglobalization.com/',
			'https://thewhitestonefoundation.org/people/',
		],
	},
	provider: {
		id: 'https://thewhitestonefoundation.org/#organization',
		name: 'The Whitestone Foundation',
		url: 'https://thewhitestonefoundation.org/',
	},
	social: {
		twitterCard: 'summary_large_image',
	},
};
