import { cvPdf, links, logos, skillItems } from './shared';
import type { Resume } from './types';

export const resume: Resume = {
	lang: 'en',
	name: 'Valeria del Rio',
	title: 'UI Engineer · Senior Software Developer',
	location: 'Argentina',
	summary: [
		'Systems Engineer specialized in front-end development, with 8+ years building web interfaces with React, Vue 3 and TypeScript (and Angular before that).',
		'I focus on design systems, accessibility (WCAG 2.1 AA) and automated testing. I am proactive, love picking up new technologies, and believe in teamwork: it helps me grow both professionally and personally.',
	],
	experience: [
		{
			company: 'GlobalLogic',
			logo: logos.globallogic,
			role: 'Senior Software Developer',
			dates: 'Jun 2024 – Present',
			summary:
				'UI development for an EdTech evaluation and student tracking platform (One95 Percent Group).',
			bullets: [
				'Design system & component architecture: built and refined reusable UI components with Vue 3, Quasar and TypeScript.',
				'Micro frontend architecture: built independent UI modules integrated into the platform, keeping visual consistency through the shared design system.',
				'Styling: applied zero-specificity techniques and clean SCSS patterns to allow seamless dynamic styling.',
				'Accessibility: enforced WCAG 2.1 AA across core UI elements, with full keyboard navigation, screen reader support and explicit ARIA properties.',
				'Testing: unit tests in Vitest for composables and components, and end-to-end tests in Playwright.',
				'Collaboration in an agile, cross-functional international team alongside Product, UX/UI and QA.',
			],
			stack: ['Vue 3', 'Quasar', 'TypeScript', 'Micro frontends', 'SCSS', 'Vitest', 'Playwright'],
		},
		{
			company: 'Levo.ai',
			logo: logos.levo,
			role: 'Founding UI Engineer',
			dates: 'Oct 2021 – Oct 2023',
			summary:
				'Led the development of the platform where clients configure and access their test results, integrating security into the CI/CD cycle.',
			bullets: [
				'Built the interface with React, Redux, Hooks and GraphQL.',
				'End-to-end tests with Cypress to keep the platform consistent.',
				'Researched solutions and proposed product and UX improvements.',
			],
			stack: ['React', 'Redux', 'GraphQL', 'Cypress'],
		},
		{
			company: 'SparkDigital',
			role: 'Web UI Developer',
			dates: 'Nov 2020 – Sep 2021',
			summary:
				'Projects for Rappi (Live Events: live and pre-recorded events inside the app) and Slice (pizzeria owners portal and SEO).',
			bullets: [
				'Built a webview and a desktop application with React, Hooks and Node.js/Express.',
				'Shipped new features and fixed bugs, with a focus on performance and user experience.',
				'Handled back-end tasks in Node.js and proposed new tooling for the team.',
			],
			stack: ['React', 'React Query', 'Node.js', 'Express'],
		},
		{
			company: 'Globant',
			logo: logos.globant,
			role: 'Web UI Developer Ssr Adv',
			dates: 'Jun 2020 – Nov 2020',
			summary: "Talent Surfer: Globant's internal platform for loading client opportunities.",
			bullets: [
				'Designed and built scalable solutions with React.',
				'Created UML diagrams of the front-end architecture.',
				'Mentored developers who were learning React.',
			],
			stack: ['React', 'Redux', 'Axios'],
		},
		{
			company: 'Globant',
			logo: logos.globant,
			role: 'Web UI Developer Ssr',
			dates: 'Mar 2019 – Jul 2020',
			summary:
				'Projects for Deloitte: Greenhouse (meetings with external clients) and MES (internal meeting service).',
			bullets: [
				'Designed and built scalable solutions with Angular 8 and NgRx.',
				'Proposed UX improvements and researched new solutions.',
				'Mentored the team on unit test development.',
			],
			stack: ['Angular', 'TypeScript', 'NgRx', 'Jasmine', 'Karma'],
		},
		{
			company: 'gA Corporate',
			role: 'Front-end Developer',
			dates: 'Nov 2017 – Mar 2019',
			bullets: [
				'Front-end development with Angular 7, internationalization (i18n) and data visualization with d3.js and Chart.js.',
				'Testing with Jasmine and SonarQube, working within Scrum.',
			],
			stack: ['Angular', 'd3.js', 'Chart.js'],
		},
		{
			company: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
			logo: logos.unicen,
			role: 'IT Administrator',
			dates: 'Oct 2013 – Nov 2017',
			bullets: ['Maintained and developed the website, and maintained computer equipment.'],
		},
	],
	education: [
		{
			institution: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
			logo: logos.unicen,
			degree: 'Systems Engineering',
			dates: '2007 – 2017',
		},
	],
	skills: [
		{ label: 'Core stack', items: skillItems.core, featured: true },
		{ label: 'UI & styling', items: skillItems.ui },
		{ label: 'Data & APIs', items: skillItems.data },
		{ label: 'Testing', items: skillItems.testing },
		{ label: 'Architecture & practices', items: skillItems.architecture },
		{ label: 'Tools & back-end', items: skillItems.tools },
		{ label: 'Also worked with', items: skillItems.previous },
	],
	// Only add advanced or industry-recognized ones (e.g. IAAP, AWS); the section hides when empty.
	certifications: [],
	spokenLanguages: ['Spanish — native', 'English — intermediate (B1–B2)'],
	// TODO: 2–4 highlighted projects (describe your role and stack, not confidential UI).
	projects: [],
	links,
	cvPdf,
	labels: {
		nav: {
			about: 'About',
			experience: 'Experience',
			education: 'Education',
			skills: 'Skills',
			projects: 'Projects',
			contact: 'Contact',
		},
		languages: 'Spoken languages',
		certifications: 'Certifications',
		downloadCv: 'Download CV (PDF)',
		contactIntro: 'Want to talk about a project or a role? Get in touch.',
		skipToContent: 'Skip to content',
		switchLanguage: 'Switch language',
	},
	meta: {
		description:
			'Valeria del Rio — UI Engineer and Senior Software Developer. React, Vue 3 and TypeScript.',
	},
};
