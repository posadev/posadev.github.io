# Posadev

## Cómo arrancar el proyecto localmente

### Requisitos

- Node version 20+
- Se recomienda usar un gestor de versiones de Node como [nvm](https://github.com/nvm-sh/nvm) o [fnm](https://github.com/Schniz/fnm)

### Pasos

```sh
# Paso 1: Clonar el repositorio usando la URL de Git del proyecto.
git clone <YOUR_GIT_URL>

# Paso 2: Entrar al directorio del proyecto.
cd posadev.github.io

# Paso 3: Instalar las dependencias necesarias.
npm i

# Paso 4: Levantar el servidor de desarrollo con auto-reload y preview instantáneo.
npm run dev
```

Por defecto el servidor queda disponible en `http://localhost:5173`.

### Otros comandos disponibles

```sh
# Compilar la aplicación para producción
npm run build

# Compilar en modo desarrollo
npm run build:dev

# Previsualizar el build de producción localmente
npm run preview

# Ejecutar el linter (eslint)
npm run lint
```

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### Issues

if you saw on web

Se bloqueó la carga de un módulo de “https://posadev.org/src/main.tsx” debido a un tipo MIME no permitido (“application/octet-stream”).

delete npm cache in actions

