# valeria-delrio

CV web bilingüe (ES/EN) hecho con Astro + TypeScript.

## Desarrollo

Requiere Node ≥ 22.12 (`nvm use` toma la versión de `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
npx astro check  # chequeo de tipos
```

## Editar el contenido

Todo el texto vive en `src/content/`, no en los componentes:

- `resume.es.ts` / `resume.en.ts`: contenido por idioma
- `shared.ts`: links, skills y ruta del PDF (iguales en ambos idiomas)

Buscá `TODO` para ver los datos que faltan completar.

## Rutas

- `/` y `/es/`: español
- `/en/`: inglés
