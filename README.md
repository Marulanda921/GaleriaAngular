# Galería de Imágenes en Angular

---

## Descripción del Proyecto

### Requisitos Previos

1. **Docker** instalado en el sistema.
    - Instalar Docker Desktop si no está disponible.
2. **Cuenta de Docker Hub** si quieres subir o descargar imágenes del contenedor.
3. **Acceso al puerto** en el que la aplicación se ejecutará (por defecto: `8080` o cualquier otro puerto disponible).

## Instrucciones para Ejecutar el Proyecto

---

### Clonar el Repositorio

El proyecto esta en github clonalo

```purescript
git clone https://github.com/Marulanda921/GaleriaAngular.git
```

### Descargar la Imagen desde Docker Hub

Abre una terminal o línea de comandos y ejecuta el siguiente comando para descargar la imagen de Docker desde Docker Hub:

```bash
docker pull achner/galeria
```

---

### Ejecutar el Contenedor

Una vez descargada la imagen, puedes ejecutar el contenedor. Por defecto, el contenedor expone la aplicación en el puerto `80` del contenedor, pero puedes mapearlo a cualquier puerto disponible en tu máquina local.

Ejemplo usando el puerto `8080`:

```bash
docker run -d -p 8080:80 achner/galeria
```

Si el puerto `8080` ya está en uso, puedes cambiarlo a cualquier otro puerto, por ejemplo `8081`:

```bash
docker run -d -p 8081:80 achner/galeria
```

---

### Acceder a la Aplicación

Una vez que el contenedor esté en ejecución, puedes acceder a la aplicación abriendo tu navegador y dirigiéndote a:

- **Si usas el puerto 8080**:
    
    ```arduino
    http://localhost:8080
    ```
    
- **Si usas otro puerto (ej. 8081)**:
    
    ```arduino
    http://localhost:8081
    ```
    

### Detener el Contenedor

Si necesitas detener el contenedor, primero obtén el ID del contenedor que está ejecutando la aplicación:

```bash
docker ps
```

# Galería de Imágenes en Angular (LOCALMENTE)

---

### Requisitos Previos

1. **Node.js y npm**: Necesarios para ejecutar y construir aplicaciones Angular.
    - [Instalar Node.js y npm](https://nodejs.org/)
2. **Angular CLI**: Herramienta de línea de comandos para Angular.
    - Instalar Angular CLI globalmente:
        
        ```bash
        npm install -g @angular/cli
        ```
        
3. **Editor de código**: Como Visual Studio Code o cualquier editor que prefieras.

---

### Instrucciones para Ejecutar el Proyecto Localmente

### Clonar el Repositorio

Clona el repositorio del proyecto desde GitHub (o cualquier otro repositorio donde esté alojado):

```bash
git clone https://github.com/Marulanda921/GaleriaAngular.git
```

Navega a la carpeta del proyecto:

```bash
cd galer
```

### Instalar Dependencias

Instala las dependencias del proyecto utilizando npm:

```bash
npm install
```

Este comando descargará e instalará todas las dependencias necesarias para ejecutar la aplicación.

### Ejecutar el Servidor de Desarrollo

Inicia el servidor de desarrollo Angular:

```bash
ng serve
```

Por defecto, el servidor de desarrollo se ejecutará en el puerto `4200`. Puedes especificar un puerto diferente si es necesario con el siguiente comando

```bash
ng serve --port 4201
```
