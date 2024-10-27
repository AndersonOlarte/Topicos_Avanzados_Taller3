# Aplicación de Prueba
# PokemonShowDon

Este proyecto utiliza [Playwright](https://playwright.dev/) para automatizar pruebas de la aplicación Pokemon Showdown, incluyendo la creación y validación de equipos de Pokémon.

## Estructura del Proyecto

- `data/`: Contiene archivos JSON con los datos de prueba.
- `Pages/`: Contiene clases que implementan el Page Object Model (POM) para cada página de la aplicación.
- `tests/`: Contiene los archivos de pruebas automatizadas.
- `playwright.config.ts`: Configuración de Playwright para el proyecto.
- `README.md`: Documentación del proyecto.
  
## Instalación

### Prerrequisitos

Asegúrate de tener instalado:
- Node.js (v14 o superior)

### Pasos de instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AndersonOlarte/Topicos_Avanzados_Taller3.git

2. Ve al directorio del proyecto:
    ```bash
    cd Topicos_Avanzados_Taller3
3. Instala las dependencias:
    ```bash
    npm install
4. Instala los navegadores requeridos por Playwright:
    ```bash
    npx playwright install

### Ejecución de las Pruebas 
1. Para ejecutar solo el archivo taller4.spec.ts:
    ```bash
    npx playwright test tests/TestingQa.spec.ts
3. Ejecutar pruebas en modo "headed" (navegador visible)
    ```bash
    npx playwright test tests/TestingQa.spec.ts --headed
4. Ver el reporte de pruebas
    ```bash
    npx playwright show-report


## Resumen de Tests

El siguiente test fue desarrollado para la correcta validación del funcionamiento de la API de QA Testing. A continuación, se presenta un breve resumen de los test y los casos de preba descritos

1. **Creación de usuario mediantes API**: Verifica el correcto funcionamiento de la API para la creación de un usuario.

2. **Log in con el usuario recien creado**: Valida que el usuario creado pueda iniciar sesión en la aplicación.

3. **Eliminación del usuario**: Valida que el usuario creado pueda ser eliminado de la aplicación.

5. **Rechazo de login con usuario eliminado**: Valida que el usuario no pueda iniciar sesión en la aplicación luego de haber sido eliminado.


#### El punto numero 2 se encuentra en la carpeta Punto2
Ahí encontraran los archivos .json y evidencias de las ejecuciones con status 200 sobre el proyecto NASA

## Creadores

Esta aplicación ha sido desarrollada por:

- Juan Camilo Castro
- Anderson Olarte Martínez

Para más información o consultas, por favor contacte a los desarrolladores.

