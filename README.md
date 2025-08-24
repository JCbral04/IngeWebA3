# IngeWebA3

### Repositorio de GitHub para el trabajo individual de la asignatura de Ingeniería Web I.

---

## Tabla de Contenidos
- [¿Qué significa clonar un repositorio?](#qué-significa-clonar-un-repositorio)
- [Requisitos previos](#requisitos-previos)
- [Cómo clonar el repositorio en Linux](#cómo-clonar-el-repositorio-en-linux)
- [Cómo clonar el repositorio en Windows](#cómo-clonar-el-repositorio-en-windows)

---

## ¿Qué significa clonar un repositorio?

Clonar un repositorio es el proceso de copiar todo el contenido de un proyecto desde GitHub a tu computador local. Esto te permite:

- Ver, modificar y ejecutar los archivos del proyecto
- Trabajar localmente sin conexión permanente a internet
- Enviar cambios al repositorio remoto (si tienes permisos)

---

## Requisitos previos

1. Tener Git instalado:
   - Verifica con `git --version`
   - Si no lo tienes, descárgalo desde [https://git-scm.com](https://git-scm.com)

2. Acceso a internet y navegador para obtener la URL del repositorio

3. Un editor de código recomendado: [Visual Studio Code](https://code.visualstudio.com)

---

## Cómo clonar el repositorio en Linux

1. Abre la terminal (`Ctrl + Alt + T` o búscala en el menú de aplicaciones).
2. Verifica si Git está instalado:
   ```bash
   git --version
   ```
   Si no lo está, instala con:
   ```bash
   sudo apt update
   sudo apt install git
   ```
3. Elige una carpeta para clonar el proyecto:
   ```bash
   cd Documentos
   ```
   Si no sabes cómo ver las carpetas desde la terminal, utiliza:
   ```bash
   ls
   ```
4. Copia la URL del repositorio desde GitHub:
   - Entra a [https://github.com/JCbral04/IngeWebA3](https://github.com/JCbral04/IngeWebA3)
   - Haz clic en el botón **Code** y copia el enlace HTTPS
5. Clona el repositorio:
   ```bash
   git clone https://github.com/JCbriol04/IngeWebA3.git
   ```
6. Accede a la carpeta del proyecto:
   ```bash
   cd IngeWebA3
   ```
7. Abre el archivo `index.html` en el navegador:
   ```bash
   xdg-open index.html
   ```

---

## Cómo clonar el repositorio en Windows

1. Instala Git desde: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Abre el programa **Git Bash** (viene incluido con Git).
3. Elige una carpeta de destino, por ejemplo:
   ```bash
   cd /c/Users/TuUsuario/Documentos
   ```
4. Copia la URL del repositorio desde GitHub:
   - Entra a [https://github.com/JCbral04/IngeWebA3](https://github.com/JCbral04/IngeWebA3)
   - Haz clic en **Code** y copia el enlace HTTPS
5. Clona el repositorio:
   ```bash
   git clone https://github.com/JCbriol04/IngeWebA3.git
   ```
6. Accede al proyecto:
   ```bash
   cd IngeWebA3
   ```
7. Abre `index.html` en tu navegador con doble clic o utiliza Visual Studio Code:
   ```bash
   code .
   ```
