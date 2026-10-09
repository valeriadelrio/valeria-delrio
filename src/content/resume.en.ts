import { cvPdf, links, skillItems } from './shared';
import type { Resume } from './types';

export const resume: Resume = {
	lang: 'en',
	name: 'Valeria del Rio',
	title: 'UI Engineer · Senior Software Developer',
	// TODO: location (e.g. "Buenos Aires, Argentina")
	summary: [
		'Systems Engineer specialized in front-end development. I work with React, Vue 3 and TypeScript, building clear, maintainable, user-focused interfaces.',
		'I started out with Angular and React and keep learning continuously. I enjoy working as part of a team and taking a product idea all the way to a solid, tested UI.',
	],
	experience: [
		{
			company: 'GlobalLogic',
			role: 'Senior Software Developer',
			dates: 'Present',
			bullets: [
				// TODO: add 2–3 bullets about your role (no client names or confidential details).
				'Front-end development of web applications with a focus on UI quality and maintainability.',
			],
			stack: ['React', 'Vue 3', 'TypeScript'],
		},
		{
			company: 'Levo.ai',
			role: 'Founding UI Engineer',
			bullets: [
				'First UI engineer on the team: built the product interface from the ground up.',
				'Front-end architecture with React, Redux and Hooks, consuming GraphQL APIs.',
				'End-to-end tests with Cypress and close collaboration on UX decisions.',
			],
			stack: ['React', 'Redux', 'GraphQL', 'Cypress'],
		},
	],
	education: [
		{
			institution: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
			degree: 'Systems Engineering',
			dates: '2007 – 2017',
		},
	],
	skills: [
		{ label: 'Languages', items: skillItems.languages },
		{ label: 'Frameworks & libraries', items: skillItems.frameworks },
		{ label: 'Tools', items: skillItems.tools },
	],
	certifications: [
		{ name: 'Vue.js', issuer: 'Udemy' },
		{ name: 'Angular 4', issuer: 'Udemy' },
		{ name: 'HTML, CSS & Git', issuer: 'Acamica' },
	],
	spokenLanguages: ['Spanish — native', 'English — professional'],
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
		languages: 'Languages',
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
