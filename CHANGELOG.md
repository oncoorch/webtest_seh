# Changelog

## v1.0.1 - 2026-09-11

Preparacion de despliegue aislado para Dokploy/NICOP.

- Actualiza Next.js a `16.3.5` y agrega `package-lock.json` reproducible.
- Cambia produccion a export estatico de Next.js servido por Nginx sin privilegios.
- Expone el contenedor en el puerto interno `8080`.
- Agrega headers basicos de seguridad y healthcheck HTTP.
- Documenta el uso de rama `production` y dominio `test-seh.oncoorch.com`.

## v1.0.0 - 2026-09-11

Version inicial del portal SEH.

- Portada institucional moderna.
- Modulo de Educacion Continua.
- Pagina independiente de Agenda Nacional de Investigacion Hematologica.
- Paginas base para Institucion, Investigacion, Grupos, Publicaciones, Eventos, Membresia, Pacientes y Contacto.
- Documentacion de despliegue en Dokploy.
- Instrucciones para Codex en AGENTE.md.
- Dockerfile de produccion.
