import { cvPdf, links, logos, skillItems } from './shared';
import type { Resume } from './types';

export const resume: Resume = {
	lang: 'es',
	name: 'Valeria del Rio',
	title: 'UI Engineer · Senior Software Developer',
	location: 'Argentina',
	summary: [
		'Ingeniera de Sistemas especializada en desarrollo front-end, con más de 8 años construyendo interfaces web con React, Vue 3 y TypeScript (y antes Angular).',
		'Me enfoco en design systems, accesibilidad (WCAG 2.1 AA) y testing automatizado. Soy proactiva, disfruto aprender tecnologías nuevas y creo en el trabajo en equipo: me hace crecer tanto profesional como personalmente.',
	],
	experience: [
		{
			company: 'GlobalLogic',
			logo: logos.globallogic,
			role: 'Senior Software Developer',
			dates: 'jun 2024 – Actualidad',
			summary:
				'Desarrollo de UI para una plataforma EdTech de evaluación y seguimiento de estudiantes (One95 Percent Group).',
			bullets: [
				'Design system y arquitectura de componentes: construcción y refinamiento de componentes reutilizables con Vue 3, Quasar y TypeScript.',
				'Estilos: técnicas de especificidad cero y patrones SCSS limpios para permitir estilos dinámicos sin conflictos.',
				'Accesibilidad: aplicación de WCAG 2.1 AA en los elementos core de la UI, con navegación completa por teclado, compatibilidad con lectores de pantalla y atributos ARIA explícitos.',
				'Testing: tests unitarios con Vitest para composables y componentes, y tests end-to-end con Playwright.',
				'Trabajo en un equipo ágil, internacional y multidisciplinario junto a Producto, UX/UI y QA.',
			],
			stack: ['Vue 3', 'Quasar', 'TypeScript', 'SCSS', 'Vitest', 'Playwright'],
		},
		{
			company: 'Levo.ai',
			logo: logos.levo,
			role: 'Founding UI Engineer',
			dates: 'oct 2021 – oct 2023',
			summary:
				'Lideré el desarrollo de la plataforma donde los clientes configuran y consultan sus resultados de tests, integrando seguridad en el ciclo de CI/CD.',
			bullets: [
				'Construcción de la interfaz con React, Redux, Hooks y GraphQL.',
				'Tests end-to-end con Cypress para mantener la consistencia de la plataforma.',
				'Investigación de soluciones y propuestas de mejora de producto y de UX.',
			],
			stack: ['React', 'Redux', 'GraphQL', 'Cypress'],
		},
		{
			company: 'SparkDigital',
			role: 'Web UI Developer',
			dates: 'nov 2020 – sep 2021',
			summary:
				'Proyectos para Rappi (Live Events, eventos en vivo y grabados dentro de la app) y Slice (portal de dueños de pizzerías y SEO).',
			bullets: [
				'Desarrollo de una webview y una aplicación de escritorio con React, Hooks y Node.js/Express.',
				'Nuevas features y corrección de bugs, con foco en performance y experiencia de usuario.',
				'Tareas de back-end en Node.js y propuestas de nuevas herramientas para el equipo.',
			],
			stack: ['React', 'React Query', 'Node.js', 'Express'],
		},
		{
			company: 'Globant',
			logo: logos.globant,
			role: 'Web UI Developer Ssr Adv',
			dates: 'jun 2020 – nov 2020',
			summary: 'Talent Surfer: plataforma interna de Globant para cargar oportunidades de clientes.',
			bullets: [
				'Diseño y desarrollo de soluciones escalables con React.',
				'Diagramas UML de la arquitectura front-end.',
				'Mentoría a otros desarrolladores que estaban aprendiendo React.',
			],
			stack: ['React', 'Redux', 'Axios'],
		},
		{
			company: 'Globant',
			logo: logos.globant,
			role: 'Web UI Developer Ssr',
			dates: 'mar 2019 – jul 2020',
			summary:
				'Proyectos para Deloitte: Greenhouse (organización de reuniones con clientes externos) y MES (servicio de reuniones interno).',
			bullets: [
				'Diseño y desarrollo de soluciones escalables con Angular 8 y NgRx.',
				'Propuestas de mejora en UX e investigación de nuevas soluciones.',
				'Mentoría en desarrollo de tests unitarios.',
			],
			stack: ['Angular', 'TypeScript', 'NgRx', 'Jasmine', 'Karma'],
		},
		{
			company: 'gA Corporate',
			role: 'Front-end Developer',
			dates: 'nov 2017 – mar 2019',
			bullets: [
				'Desarrollo front-end con Angular 7, internacionalización (i18n) y visualización de datos con d3.js y Chart.js.',
				'Testing con Jasmine y SonarQube, trabajando con metodología Scrum.',
			],
			stack: ['Angular', 'd3.js', 'Chart.js'],
		},
		{
			company: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
			logo: logos.unicen,
			role: 'Administradora de TICs',
			dates: 'oct 2013 – nov 2017',
			bullets: ['Mantenimiento y desarrollo del sitio web, y mantenimiento de equipos.'],
		},
	],
	education: [
		{
			institution: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
			logo: logos.unicen,
			degree: 'Ingeniería en Sistemas',
			dates: '2007 – 2017',
		},
	],
	skills: [
		{ label: 'Stack principal', items: skillItems.core, featured: true },
		{ label: 'UI y estilos', items: skillItems.ui },
		{ label: 'Datos y APIs', items: skillItems.data },
		{ label: 'Testing', items: skillItems.testing },
		{ label: 'Arquitectura y prácticas', items: skillItems.architecture },
		{ label: 'Herramientas y back-end', items: skillItems.tools },
		{ label: 'También trabajé con', items: skillItems.previous },
	],
	// Only add advanced or industry-recognized ones (e.g. IAAP, AWS); the section hides when empty.
	certifications: [],
	spokenLanguages: ['Español — nativo', 'Inglés — intermedio (B1–B2)'],
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
