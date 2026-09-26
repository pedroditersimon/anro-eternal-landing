# Anro Eternal Landing

Landing ligera con Angular 21 LTS, componentes standalone, router lazy y Tailwind CSS 4. Usa pnpm.

```bash
pnpm install
pnpm start
pnpm build
```

## Organización

```text
src/app/
├── routes/
│   ├── links.ts                      # LINKS: path del router y build() para URLs
│   └── app.routes.ts                 # Rutas con carga lazy
├── features/landing/
│   ├── pages/home/                   # Página inicial (.ts y .html)
│   ├── components/                   # Componentes de la landing (al necesitarlos)
│   └── services/                     # Servicios de la landing (al necesitarlos)
├── app.ts                            # Router outlet
└── app.html                          # Template raíz
```

Para sumar una página, agregá su `path` y `build(...)` en `LINKS` y declarala en `routes/app.routes.ts` con `loadComponent`. Mantené los templates en archivos `.html`. Creá `components/` y `services/` dentro de cada feature cuando haya código que alojar.
