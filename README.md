# Terraza Casa Nieto — sitio web

Sitio web estático listo para Cloudflare Pages.

## Archivos
- `index.html`: estructura de la página.
- `styles.css`: colores y diseño adaptable al celular.
- `menu.js`: los 34 productos, precios y filtros por categoría.

## Publicación en Cloudflare Pages
1. Subir estos archivos a la **raíz** del repositorio `terraza-casa-nieto` en GitHub.
2. En Cloudflare, crear un proyecto **Pages** conectado al repositorio (no Workers).
3. Framework preset: **None**. Build command: vacío. Build output directory: `/` (raíz).
4. Publicar y probar la URL temporal `.pages.dev`.
5. En Pages > Custom domains, agregar `terrazacasanieto.com` y seguir las indicaciones de Cloudflare.

## Actualización de precios
En GitHub, abrir `menu.js`, pulsar el lápiz, modificar `price: 40` por el nuevo precio y hacer **Commit changes**. Pages republicará los cambios automáticamente cuando esté conectado a GitHub.

## Antes de difusión pública
- Verificar productos y precios con la carta vigente.
- Verificar que el enlace de Google Maps llegue al negocio correcto.
- Añadir fotos reales y calendario de eventos cuando estén disponibles.
