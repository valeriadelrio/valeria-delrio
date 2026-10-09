import type { ImageMetadata } from 'astro';

export type Lang = 'es' | 'en';

export interface Experience {
	company: string;
	/** Company logo. Entries without one get a generated abstract mark. */
	logo?: ImageMetadata;
	role: string;
	/** Free text, e.g. "jun 2024 – Actualidad". */
	dates?: string;
	/** One or two sentences of context: product, client, team. */
	summary?: string;
	bullets: string[];
	stack?: string[];
}

export interface Education {
	institution: string;
	logo?: ImageMetadata;
	degree: string;
	dates?: string;
}

export interface SkillGroup {
	label: string;
	items: string[];
	/** Core stack: rendered first and with stronger emphasis. */
	featured?: boolean;
}

export interface Certification {
	name: string;
	issuer?: string;
}

export interface Project {
	name: string;
	description: string;
	stack: string[];
	url?: string;
}

export interface Links {
	email?: string;
	linkedin: string;
	github: string;
}

/** UI strings that are not part of the CV content itself. */
export interface Labels {
	nav: {
		about: string;
		experience: string;
		education: string;
		skills: string;
		projects: string;
		contact: string;
	};
	languages: string;
	certifications: string;
	downloadCv: string;
	contactIntro: string;
	skipToContent: string;
	switchLanguage: string;
}

export interface Resume {
	lang: Lang;
	name: string;
	title: string;
	location?: string;
	summary: string[];
	experience: Experience[];
	education: Education[];
	skills: SkillGroup[];
	certifications: Certification[];
	spokenLanguages: string[];
	projects: Project[];
	links: Links;
	/** Path inside public/, e.g. "/cv-valeria-delrio.pdf". Hides the button when unset. */
	cvPdf?: string;
	labels: Labels;
	meta: { description: string };
}
