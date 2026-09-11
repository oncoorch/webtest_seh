# Instrucciones para Codex - SEH Web

## Objetivo

Mantener, desplegar y evolucionar el portal institucional de la Sociedad Ecuatoriana de Hematologia en Dokploy, con DNS confirmado por el propietario.

## Reglas obligatorias

1. Leer `README.md` y este archivo antes de modificar, versionar o desplegar.
2. No inventar dominio, IP, correos, autoridades, fechas, eventos, costos, programas academicos ni datos cientificos.
3. No escribir credenciales en archivos, commits, logs o respuestas.
4. Usar variables de entorno solo desde Dokploy o el gestor seguro autorizado.
5. No cambiar DNS hasta validar primero la URL temporal o interna de Dokploy.
6. No eliminar respaldos ni sitios temporales sin instruccion expresa.
7. No publicar una version si falla `npm run build`.

## Procedimiento de despliegue en Dokploy

```bash
npm install
npm run build
```

Confirmar rama `production`, puerto interno `8080`, Dockerfile presente y ausencia de secretos.

### Configuracion Dokploy

- Proveedor: GitHub.
- Repositorio: `oncoorch/webtest_seh`.
- Rama: `production`.
- Metodo: Dockerfile.
- Puerto interno: `8080`.
- HTTPS: activo cuando se asigne dominio.

### Validacion

Verificar en escritorio y movil: portada, `/educacion`, `/agenda-nacional`, navegacion superior, pie institucional y ausencia de 404 en rutas principales.

### DNS

Usar el hostname final confirmado `test-seh.oncoorch.com`, aplicar en Cloudflare un registro `A` hacia la IP publica del VPS NICOP y verificar resolucion + HTTPS antes de anunciar el sitio.

## Politica de contenido

- Mantener el rojo como acento, no como color dominante.
- Usar azul petroleo, blanco y grises claros como base institucional.
- Separar contenido profesional de contenido para pacientes.
- Marcar como "Proximamente" todo evento, curso, costo o fecha no confirmado.
- Diferenciar Agenda Nacional, Grupos de Investigacion y Publicaciones.

## Version actual

`v1.0.1`.
