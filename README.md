# Terraza Casa Nieto — preparación del panel

Esta versión CONSERVA la apariencia del sitio original y separa los 34 productos en `data/menu.json`.

## Qué funciona
- Menú público con los precios y categorías originales.
- Lectura de los datos desde `data/menu.json`.
- Archivos iniciales de Decap CMS en `/admin/`.

## Qué NO funciona todavía
- **No está habilitado el inicio de sesión en /admin/**.
- **No está habilitado guardar cambios desde Decap CMS**.
- Los eventos de `data/eventos.json` aún no aparecen en la web pública.
- No hay panel de subida de fotografías operativo.

## Seguridad
Para usar Decap con GitHub hay que configurar un servicio OAuth con secreto privado en el servidor.
Nunca coloques Client Secret, PAT ni contraseñas en `index.html`, `menu.js`, `config.yml` o GitHub público.
No registres la aplicación OAuth antes de definir la URL de callback del servicio.

## Subir a GitHub
Descomprime el ZIP y sube los archivos y carpetas a la raíz del repositorio.
Reemplaza los archivos existentes `index.html`, `styles.css`, `menu.js` y `README.md` cuando GitHub lo solicite.
Espera a que Cloudflare Pages despliegue y verifica el menú público.
El panel `/admin/` no debe considerarse seguro/operativo hasta completar OAuth y permisos.
