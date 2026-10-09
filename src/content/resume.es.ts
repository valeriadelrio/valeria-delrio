import { cvPdf, links, skillItems } from './shared';
import type { Resume } from './types';

export const resume: Resume = {
	lang: 'es',
	name: 'Valeria del Rio',
	title: 'UI Engineer · Senior Software Developer',
	// TODO: location (e.g. "Buenos Aires, Argentina")
	summary: [
		'Ingeniera de Sistemas especializada en desarrollo front-end. Trabajo con React, Vue 3 y TypeScript construyendo interfaces claras, mantenibles y centradas en la experiencia de usuario.',
		'Empecé con Angular y React, y sigo aprendiendo de forma continua. Disfruto trabajar en equipo y llevar una idea de producto hasta una UI sólida y testeada.',
	],
	experience: [
		{
			company: 'GlobalLogic',
			role: 'Senior Software Developer',
			dates: 'Actualidad',
			bullets: [
				// TODO: add 2–3 bullets about your role (no client names or confidential details).
				'Desarrollo front-end de aplicaciones web con foco en calidad de UI y mantenibilidad.',
			],
			stack: ['React', 'Vue 3', 'TypeScript'],
		},
		{
			company: 'Levo.ai',
			role: 'Founding UI Engineer',
			bullets: [
				'Primera ingeniera de UI del equipo: construcción de la interfaz del producto desde cero.',
				'Arquitectura front-end con React, Redux y Hooks, consumiendo APIs GraphQL.',
				'Tests end-to-end con Cypress y trabajo cercano en decisiones de UX.',
			],
			stack: ['React', 'Redux', 'GraphQL', 'Cypress'],
		},
	],
	education: [
		{
			institution: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
			degree: 'Ingeniería de Sistemas',
			dates: '2007 – 2017',
		},
	],
	skills: [
		{ label: 'Lenguajes', items: skillItems.languages },
		{ label: 'Frameworks y librerías', items: skillItems.frameworks },
		{ label: 'Herramientas', items: skillItems.tools },
	],
	certifications: [
		{ name: 'Vue.js', issuer: 'Udemy' },
		{ name: 'Angular 4', issuer: 'Udemy' },
		{ name: 'HTML, CSS y Git', issuer: 'Acamica' },
	],
	spokenLanguages: ['Español — nativo', 'Inglés — profesional'],
	// TODO: 2–4 highlighted projects (describe your role and stack, not confidential UI).
	projects: [],
	links,
	cvPdf,
	labels: {
		nav: {
			about: 'Sobre mí',
			experience: 'Experiencia',
			education: 'Educación',
			skills: 'Skills',
			projects: 'Proyectos',
			contact: 'Contacto',
		},
		languages: 'Idiomas',
		certifications: 'Certificaciones',
		downloadCv: 'Descargar CV (PDF)',
		contactIntro: '¿Querés charlar sobre un proyecto o una posición? Escribime.',
		skipToContent: 'Saltar al contenido',
		switchLanguage: 'Cambiar idioma',
	},
	meta: {
		description:
			'Valeria del Rio — UI Engineer y Senior Software Developer. React, Vue 3 y TypeScript.',
	},
};
