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
	datePublished: '2026',
	project: {
		name: 'The Wild Globalization Project',
		url: 'https://wildglobalization.com/',
	},
	// @id matches the Person node in thewhitestonefoundation.org/src/_data/schema.json
	// so the two sites describe one person, not two.
	instructor: {
		id: 'https://thewhitestonefoundation.org/team/gary-bedford/#person',
		name: 'Gary Bedford',
		givenName: 'Gary',
		familyName: 'Bedford',
		honorificSuffix: 'ChFC, CIMA, MA',
		url: 'https://www.garybedford.com/',
		jobTitle: 'Vice President and Volunteer Board Member, The Whitestone Foundation',
		description:
			'Leads the Wild Globalization Project, reading globalization across the whole human record through theological philosophy, the study of global religions, and a career in wealth management.',
		image: `${canonicalSiteUrl}/assets/img/gary-bedford.jpg`,
		email: 'gary@thewhitestonefoundation.org',
		sameAs: [
			'https://www.linkedin.com/in/garybedford/',
			'https://www.garybedford.com/',
			'https://wildglobalization.com/',
			'https://explore.wildglobalization.com/',
			'https://thewhitestonefoundation.org/team/gary-bedford/',
			'https://independent.academia.edu/GaryBedford',
		],
		homeLocation: {
			'@type': 'Place',
			name: 'Boulder County, Colorado',
		},
		alumniOf: [
			{ '@type': 'CollegeOrUniversity', name: 'University of Denver', url: 'https://www.du.edu/' },
			{ '@type': 'CollegeOrUniversity', name: 'California State University, Chico', url: 'https://www.csuchico.edu/' },
		],
		hasCredential: [
			{
				'@type': 'EducationalOccupationalCredential',
				name: 'Master’s Degree, Philosophy and Religious Studies',
				recognizedBy: { '@type': 'CollegeOrUniversity', name: 'University of Denver' },
				startDate: '2009',
				endDate: '2011',
				description: 'Thesis: Re-visioning the semantic and semiotic registers in the study of culture and religion.',
			},
			{
				'@type': 'EducationalOccupationalCredential',
				name: 'Bachelor’s Degree, Philosophy and Religious Studies',
				recognizedBy: { '@type': 'CollegeOrUniversity', name: 'California State University, Chico' },
				startDate: '1975',
				endDate: '1977',
			},
		],
		knowsAbout: [
			'Globalization',
			'Philosophy and religious studies',
			'Cultural and religious theory',
			'Wealth management',
			'Estate planning',
			'Ecology',
			'Technology',
			'Governance',
			'Artificial intelligence and learning',
		],
		publishingPrinciples: [
			'https://jcrt.org/archives/12.3/bedford/',
			'https://jcrt.org/archives/20.1/bedford/',
		],
		colleague: [
			{ '@type': 'Person', name: 'Adam DJ Brett', url: 'https://adamdjbrett.com/' },
			{ '@type': 'Person', name: 'Carl Raschke', url: 'https://carlraschke.com/' },
			{ '@type': 'Person', name: 'Victor E. Taylor', url: 'https://www.linkedin.com/in/victor-e-taylor-4911342b/' },
		],
		hasOccupation: {
			'@type': 'Occupation',
			name: 'Vice President and Volunteer Board Member',
			occupationLocation: { '@type': 'City', name: 'Boulder, Colorado' },
		},
		subjectOf: [
			{ '@type': 'WebSite', name: 'Gary Bedford', url: 'https://www.garybedford.com/' },
			{ '@type': 'WebSite', name: 'Wild Globalization', url: 'https://wildglobalization.com/' },
			{ '@type': 'Blog', name: 'Explore Wild Globalization', url: 'https://explore.wildglobalization.com/' },
			{ '@type': 'Course', name: 'Wild Globalization Pilot', url: `${canonicalSiteUrl}/` },
			{ '@type': 'ScholarlyArticle', name: 'Journal for Cultural and Religious Theory article by Gary Bedford', url: 'https://jcrt.org/archives/12.3/bedford/' },
			{ '@type': 'ScholarlyArticle', name: 'Journal for Cultural and Religious Theory article by Gary Bedford', url: 'https://jcrt.org/archives/20.1/bedford/' },
		],
	},
	provider: {
		id: 'https://thewhitestonefoundation.org/#organization',
		name: 'The Whitestone Foundation',
		alternateName: 'Whitestone Publications',
		url: 'https://thewhitestonefoundation.org/',
		description: 'A Boulder, Colorado-registered 501(c)(3) nonprofit fostering critical thought for the public interest through independent research and open-access publishing.',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Boulder',
			addressRegion: 'CO',
			addressCountry: 'US',
		},
		publishingPrinciples: 'https://thewhitestonefoundation.org/publications/',
		publications: [
			{ '@type': 'Periodical', name: 'The Journal for Cultural and Religious Theory', url: 'https://jcrt.org/' },
			{ '@type': 'Periodical', name: 'The New Polis Journal', url: 'https://journal.thenewpolis.com/' },
			{ '@type': 'Blog', name: 'The New Polis', url: 'https://thenewpolis.com/' },
			{ '@type': 'Blog', name: 'Esthesis', url: 'https://esthesis.org/' },
			{ '@type': 'WebSite', name: 'Wild Globalization', url: 'https://wildglobalization.com/' },
			{ '@type': 'Blog', name: 'Explore Wild Globalization', url: 'https://explore.wildglobalization.com/' },
			{ '@type': 'Course', name: 'Wild Globalization Pilot', url: 'https://journey.wildglobalization.com/' },
		],
	},
	social: {
		twitterCard: 'summary_large_image',
	},
};
