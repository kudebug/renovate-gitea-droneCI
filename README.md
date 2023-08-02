[![GITEA](https://img.shields.io/badge/gitea-black?style=for-the-badge&logo=gitea)](https://gitea.io/en-us/)
[![DRONECI](https://img.shields.io/badge/drone-black?style=for-the-badge&logo=drone)](https://www.drone.io/)
[![RENOVATE BOT](https://img.shields.io/badge/renovatebot-black?style=for-the-badge&logo=renovatebot)](https://docs.renovatebot.com/)

# ⚙️ DRONECI AND RENOVATE BOT CONFIGURATION FILES
Necesary config files to Renovate Bot make pull request in Gitea, updating outdated dependencies.
DroneCI will be used to automate this builds (install steps here)-> [Documentation](https://github.com/01Joel-Hazas/docker-gitea-droneCI)

## 🚀 Steps:

To make the bot detect our desired repo:

```bash
  1. Modify config.js endpoint / gitAuthor / username.
  2. Create a new drone secret key with your gitea renovate-bot username token.
```
![Drone](https://github.com/01Joel-Hazas/renovate-gitea-droneCI-config/blob/main/secrets.png)

Edit config.js:

```bash
  repositories: [
    "REPO NAME HERE"
  ]
```

# ⚙️ ARCHIVOS DE CONFIGURACIÓN DE DRONECI Y EL BOT DE RENOVATE
Archivos de configuración necesarios para que el bot de Renovate sea capaz de detectar un repositorio en gitea y crear una pull request actualizando dependencias necesarias.
Esto se podra lograr mediante el uso de DroneCI (Instalación aqui)-> [Documentación](https://github.com/01Joel-Hazas/docker-gitea-droneCI)

## 🚀 Pasos a seguir:

Para que el bot detecte nuestro repositorio:

```bash
  1. Modifica el contenido de config.js, endpoint / gitAuthor / username.
  2. Crear claves en drone con el token del bot.
```

Modificar config.js:

```bash
  repositories: [
    "AQUI PONER EL NOMBRE DEL REPOSITORIO"
  ]
```