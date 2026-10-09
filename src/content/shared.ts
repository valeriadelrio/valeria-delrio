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
	core: ['React', 'Vue 3', 'TypeScript', 'JavaScript'],
	ui: ['HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Quasar'],
	data: ['REST APIs', 'GraphQL', 'React Query', 'Redux'],
	testing: ['Vitest', 'Playwright', 'Cypress'],
	architecture: ['Micro frontends (Module Federation)', 'Design systems', 'WCAG 2.1 AA', 'Agile / Scrum'],
	tools: ['Git', 'Node.js', 'Express', 'MongoDB'],
	// Not in day-to-day use anymore; kept so the experience entries make sense.
	previous: ['Angular', 'NgRx', 'Jasmine', 'Karma'],
} satisfies Record<string, SkillGroup['items']>;
