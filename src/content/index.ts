import { resume as en } from './resume.en';
import { resume as es } from './resume.es';
import type { Lang, Resume } from './types';

export const resumes: Record<Lang, Resume> = { es, en };
export const defaultLang: Lang = 'es';
