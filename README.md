# Portafolio — Analista de Datos

Página portafolio personal para mostrar perfil, habilidades y proyectos de análisis de datos, pensada para publicarse gratis en **GitHub Pages**.

## Stack

HTML, CSS y JavaScript puro (sin frameworks, sin paso de build). Tipografías: [Inter](https://fonts.google.com/specimen/Inter) y [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) vía Google Fonts.

## Estructura

```
index.html              → página principal (hero, sobre mí, habilidades, proyectos, contacto)
css/style.css           → todos los estilos
js/main.js              → menú móvil, efecto de tipeo, validación del formulario
assets/img/             → avatar y thumbnails de proyectos (SVG)
proyectos/proyecto-N.html → subpágina de detalle de cada proyecto
```

## Ver el sitio en local

No requiere instalación. Basta con abrir `index.html` en el navegador, o si prefieres un servidor local:

```bash
python -m http.server 8000
```

y visitar `http://localhost:8000`.

## Cómo personalizarlo

1. **Contenido de texto**: reemplaza "Tu Nombre", la bio de la sección "Sobre mí", las habilidades y las descripciones de proyectos en `index.html` y en cada `proyectos/proyecto-N.html`.
2. **Imágenes**: sustituye `assets/img/avatar.svg` por tu foto real y los archivos en `assets/img/projects/` por capturas de tus dashboards/notebooks.
3. **Redes y contacto**: actualiza los enlaces de LinkedIn, GitHub y el correo en la sección "Contact me" de `index.html`.
4. **Formulario de contacto (Formspree)**:
   - Crea una cuenta gratuita en [formspree.io](https://formspree.io).
   - Crea un nuevo formulario y copia el endpoint que te asignan (algo como `https://formspree.io/f/xxxxxxx`).
   - Reemplaza `TU_ENDPOINT_AQUI` en el atributo `action` del `<form>` en `index.html`.
5. **Proyectos**: si quieres agregar o quitar proyectos, duplica un bloque `.project-card` en `index.html` y una subpágina en `proyectos/`.

## Publicar en GitHub Pages

1. Sube este proyecto a un repositorio en GitHub.
2. Ve a **Settings → Pages** del repositorio.
3. En "Build and deployment", selecciona **Deploy from a branch**, elige la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios; GitHub te dará la URL pública del sitio (tarda unos minutos en activarse).
