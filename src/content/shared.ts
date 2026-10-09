import type { Links, SkillGroup } from './types';

// Data that is identical in both languages.

export const links: Links = {
	email: 'valeriadlrio@gmail.com',
	linkedin: 'https://www.linkedin.com/in/valeriadelrio',
	github: 'https://github.com/valeriadelrio',
};

// TODO: drop the PDF in public/ and set this path to show the download button.
export const cvPdf: string | undefined = undefined;

export const skillItems = {
	languages: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'],
	frameworks: [
		'Vue 3',
		'Quasar',
		'React',
		'Redux',
		'React Query',
		'Angular',
		'NgRx',
		'Tailwind CSS',
		'GraphQL',
		'Node.js',
		'Express',
	],
	testing: ['Vitest', 'Playwright', 'Cypress', 'Jasmine', 'Karma'],
	practices: ['WCAG 2.1 AA', 'Design systems', 'Agile / Scrum', 'Git'],
} satisfies Record<string, SkillGroup['items']>;
