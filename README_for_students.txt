Taller: Página pesada para optimización

Contenido:
- index.html (mal estructurado, imágenes enormes, scripts bloqueantes)
- styles.css (no minificado)
- script.js (sin minificar, con cálculos pesados)

Objetivo: optimizar imágenes, aplicar lazy-loading, mover/minificar scripts, limpiar CSS, reducir peticiones y simular hosting verde.

Instrucciones para el alumno:
1. Analizar la página original (peso, peticiones, Lighthouse, WebsiteCarbon).
2. Optimizar imágenes (resize, convert to WebP), aplicar loading=lazy.
3. Minificar y defer scripts; evitar loops que causen reflows; usar DocumentFragment si es necesario.
4. Limpiar CSS y mover estilos críticos al head mínimo.
5. Documentar los cambios en README_final.md y medir mejoras antes/después.



Se ha modificado los archivos para que no cree más peticiones de las que hace falta.
Se ha cambiado el formato de las imagenes de jpg a WebP, aplicando loading=lazy y redimencionandolas.
Se ha modificado el script.js para que no haga más procesos de los necesarios o que no sobrecargue la página.
Se ha limpiado el css moviendo todo a un archivo externo y eliminando los estilos que no modificaban nada.
