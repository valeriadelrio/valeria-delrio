import type { Links, SkillGroup } from './types';

// Data that is identical in both languages.

export const links: Links = {
	// TODO: add an email if you want it shown in the contact section.
	linkedin: 'https://www.linkedin.com/in/valeriadelrio',
	github: 'https://github.com/valeriadelrio',
};

// TODO: drop the PDF in public/ and set this path to show the download button.
export const cvPdf: string | undefined = undefined;

export const skillItems = {
	languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
	frameworks: ['React', 'Redux', 'Vue 3', 'Angular', 'Tailwind CSS', 'GraphQL'],
	tools: ['Git', 'Cypress'],
} satisfies Record<string, SkillGroup['items']>;
