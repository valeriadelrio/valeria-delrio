import globallogic from '../assets/logos/globallogic.jpeg';
import globant from '../assets/logos/globant.jpeg';
import levo from '../assets/logos/levo.jpeg';
import unicen from '../assets/logos/unicen.jpeg';
import type { Links, SkillGroup } from './types';

// Data that is identical in both languages.

export const links: Links = {
	email: 'valeriadlrio@gmail.com',
	linkedin: 'https://www.linkedin.com/in/valeriadelrio',
	github: 'https://github.com/valeriadelrio',
};

export const logos = { globallogic, globant, levo, unicen };

// TODO: drop the PDF in public/ and set this path to show the download button.
export const cvPdf: string | undefined = undefined;

// Ordered by relevance: what a recruiter should see first goes first.
export const skillItems = {
	core: ['TypeScript', 'JavaScript', 'Vue 3', 'React', 'Angular'],
	ui: ['HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Quasar'],
	data: ['Redux', 'NgRx', 'React Query', 'GraphQL'],
	testing: ['Vitest', 'Playwright', 'Cypress', 'Jasmine', 'Karma'],
	architecture: ['Micro frontends', 'Design systems', 'WCAG 2.1 AA', 'Agile / Scrum'],
	tools: ['Git', 'Node.js', 'Express'],
} satisfies Record<string, SkillGroup['items']>;
