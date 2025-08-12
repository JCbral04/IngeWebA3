# IngeWebA3

### Repositorio de GitHub para el trabajo individual de la asignatura de Ingeniería Web I.

## Cómo clonar y visualizar el proyecto desde GitHub

### ¿Qué significa clonar un repositorio?

Clonar un repositorio es el proceso de copiar todo el contenido de un proyecto desde GitHub a tu computador local. Esto te permite:

- Ver, modificar y ejecutar los archivos del proyecto
- Trabajar localmente sin conexión permanente a internet
- Enviar cambios al repositorio remoto (si tienes permisos)

### Requisitos previos

1. Tener Git instalado:
   - Verifica con `git --version`
   - Si no lo tienes, descárgalo desde https://git-scm.com

2. Acceso a internet y navegador para obtener la URL del repositorio

3. Un editor de código recomendado: Visual Studio Code (https://code.visualstudio.com)

---

### Cómo clonar el repositorio en Linux

1. Abre la terminal (Ctrl + Alt + T o búscala en el menú de aplicaciones)

2. Verifica si Git está instalado:
   
   `git --version`

Si no lo esta, instala con:
 `sudo apt update`
 `sudo apt install git`
 
3. Elige una carpeta para clonar el proyecto:
    `cd Documentos`
Si no sabes como ver las carpetas desde el terminal utiliza el comando ls el cual visualiza las carpetas

4. Copia la URL del repositorio desde GitHub:
   - Entra a https://github.com/JCbriol04/IngeWebA3
   - Haz clic en el botón "Code" y copia el enlace HTTPS
5. Clona el repositorio:
   git clone https://github.com/JCbriol04/IngeWebA3.git
   
7. Accede a la carpeta del proyecto:
   `cd IngeWebA3`
8. Abre el archivo index.html en el navegador:
   `xdg-open index.html`
   
### Cómo clonar el repositorio en Windows
1. Instala Git desde: https://git-scm.com/download/win
2. Abre el programa Git Bash (viene incluido con Git)
3. Elige una carpeta de destino, por ejemplo:
  ` cd /c/Users/TuUsuario/Documentos`
4. Copia la URL del repositorio desde GitHub:
   - Entra a https://github.com/JCbriol04/IngeWebA3
   - Haz clic en "Code" y copia el enlace HTTPS
5. Clona el repositorio:
   `git clone https://github.com/JCbriol04/IngeWebA3.git`
6. Accede al proyecto:
   `cd IngeWebA3`
8. Abre index.html en tu navegador con doble clic o usa Visual Studio Code:
  ` code .`

## Guia 1 ingenieria web:

## Tema del proyecto

**Construcción de una Web Informativa Semántica**

Este repositorio contiene una página principal informativa sobre los Fundamentos de la Web Moderna, elaborada con HTML5 siguiendo las buenas prácticas de semántica y accesibilidad. Está dividida en secciones sobre:

- Historia de la ingeniería web (en `index.html`)
- ¿Qué es la ingeniería web? (`ingenieriaweb.html`)
- Arquitectura cliente-servidor (`clienteservidor.html`)
- Semántica y accesibilidad en HTML5 (`html5.html`)

## Reflexión individual

Durante el desarrollo de esta actividad entendi que organizar de manera semantica me ayuda a tener una mejor estructura y orden en el codigo, ademas de esto entendi que esto me facilita la accesibilidad, el posicionamiento web, y la comprensión del sitio por parte de otros desarrolladores.

Aprendi el uso y la importacia de utilizar algunas etiquetas como `<header>`, `<main>`, `<section>` y `<footer>` ya que no solo es una cuestión estética, sino que responde a una necesidad de mantener el orden y la lógica de los componentes en el desarrollo de una pagina web.

También aprendí a organizar archivos y carpetas dentro de un proyecto web, y a subirlos correctamente a un repositorio GitHub con control de versiones, lo cual es fundamental para trabajar de forma profesional.

## Estructura del proyecto
/IngeWebA3/
├── index.html
├── ingenieriaweb.html
├── clienteservidor.html
├── html5.html
├── /css/
│ └── styles.css
├── /js/
│ └── script.js
└── /docs/
  └── diagrama-estructura.png
 
Explicación:

- `index.html`: Página principal con la historia de la ingeniería web.
- Los demás archivos `.html` contienen explicaciones específicas según el tema.
- Las carpetas `/css/`, `/js/` y `/docs/` permiten separar estilos, scripts y documentación gráfica.
- El archivo `README.md` documenta todo el proyecto, su estructura y cómo ejecutarlo.


### Reflexión en equipo
## ¿Por qué organizar de forma semántica los contenidos facilita el trabajo colaborativo y el mantenimiento del sitio?
Porque permite que cualquier miembro del equipo entienda fácilmente la estructura y el propósito de cada parte del documento. Las etiquetas semánticas describen el contenido de manera clara y hacen que el código sea más legible, tanto para personas como para máquinas.



##Tres ventajas observadas del uso de HTML5 moderno:
1. Mejora la accesibilidad para todos los usuarios, incluyendo personas con discapacidad.
2. Facilita el posicionamiento en buscadores gracias a su estructura clara.
3. Hace el código más limpio, ordenado y fácil de mantener.

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

### Estructura del proyecto (Guía 2)
