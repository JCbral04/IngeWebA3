## Guía 2 - Ingeniería Web

### Tema del proyecto
**Estructura básica de un proyecto web profesional y separación cliente-servidor**

Este proyecto tiene como objetivo aplicar las buenas prácticas de organización de un proyecto web, utilizando HTML5, CSS y JavaScript, así como comprender la importancia de la separación entre cliente y servidor en el desarrollo web moderno.

---

### Propósito y ventajas de la estructura usada
La estructura propuesta sigue un modelo profesional, separando de forma clara los recursos del proyecto:

- **/css** → Contiene las hojas de estilo, lo que facilita mantener y modificar la apariencia sin afectar la estructura HTML.
- **/js** → Archivos JavaScript para la funcionalidad y comportamiento de la página.
- **/assets** → Recursos como imágenes y tipografías, organizados para un acceso rápido.
- **/docs** → Documentación y diagramas que describen la arquitectura del proyecto.
- **index.html** → Archivo principal que sirve como punto de entrada.

**Ventajas:**
1. Facilita el trabajo colaborativo, ya que cada área (estructura, estilo, funcionalidad) está claramente delimitada.
2. Mejora el mantenimiento y escalabilidad del proyecto.
3. Permite que otros desarrolladores comprendan rápidamente dónde encontrar y modificar cada parte del sistema.

---

### Importancia de la separación cliente-servidor
En una arquitectura web moderna, **el cliente** (navegador) se encarga de mostrar la interfaz y manejar la interacción del usuario, mientras que **el servidor** procesa solicitudes, gestiona datos y devuelve respuestas.

**Beneficios de esta separación:**
- **Seguridad:** el código y datos sensibles permanecen en el servidor.
- **Eficiencia:** el servidor procesa y entrega solo lo necesario, optimizando la carga.
- **Escalabilidad:** se pueden modificar la interfaz o la lógica de servidor sin afectar la otra parte.
- **Flexibilidad tecnológica:** el cliente y el servidor pueden desarrollarse con tecnologías distintas.

---

