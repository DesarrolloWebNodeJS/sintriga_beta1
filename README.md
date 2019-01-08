<p align="center">
  <a href="https://desarrollowebnodejs.github.io/">
    <img alt="desarrollo web nodejs" src="https://img9.uploadhouse.com/fileuploads/26959/2695971975bcaa663cd5794358e8f1643840cca6.jpeg" width="500">
  </a>
</p>

<p align="center">
	<h3 align="center">Desarrollo Web NodeJS</h3>
</p>

<p align="center">
  <a href="https://desarrollowebnodejs.github.io"><img alt="Website" src="https://img.shields.io/website-up-down-green-red/http/shields.io.svg"></a>
</p>


---


## Requisitos

- [NodeJS](https://nodejs.org/es/) 

	```
	# Verifica NodeJS
	node -v
	```

## Desarrollo

1.  Clonar este repositorio

	```bash
	git clone https://github.com/DesarrolloWebNodeJS/sintriga.git
	cd sintriga
	```

1.  Instalar dependencias NodeJS

	```
	npm install
	```
+Nota: Si usas [Yarn](https://yarnpkg.com/), puedes correr con el comando `yarn`.

1. Renombrar el archivo *ejemplo.env* a *.env*, contiene variables de entorno que se cargaran con el módulo **dotenv**.

1. Correr el servidor

	```
	## Hack Frontend
	npm runfrontend-start

	## Contruir Frontend
	npm runfrontend-build

	## Run/Hack Backend
	npm run backend-start

	```

1. Para realizar peticiones al *backend* se configura en la base del *frontend* la **BaseURL** de axios en:
	```
	// NOTA: Apunta a la IP real del servidor donde se aloja express.
	const axiosInstance = axios.create({
		baseURL: 'http://192.168.100.10:5000/api/'
	});
	```
1. Frontend en [http://localhost:4000/](http://localhost:4000/)
1. Backend en [http://localhost:5000/](http://localhost:5000/)

## Contribuyendo 
Quieres ayudar? ¡Genial! Hay muchas formas de hacerlo:

**Contribuya con código:** Configure el entorno de desarrollo, realice algunos cambios y abra una solicitud de extracción(Pull Request). 

**Contribuya con ideas:** ¿Tiene una gran idea, pero no sabe cómo codificar (o tal vez es demasiado perezoso para hacerlo)? ¡No hay problema! Abre un tema(Issue) para que podamos hablar sobre tu genial idea.

**Contribuye con la caza de errores:** Tenemos un increíble equipo de cazadores de errores. Puedes [unirte a nuestro servidor](https://discord.gg/YmgErgv) y solicitar el rol *Cazador de Bugs*™. Después de eso, puedes comenzar a buscar errores y reportarlos.

**Contribuye con traducciones:** Que la aplicación sea multilenguaje es importante de este modo llegaremos a la mayoria de usuarios posibles.

**Únete** a nuestro servidor en **[Discord](https://discord.gg/YmgErgv)** y enterate de todas las etapas de desarrollo. A veces hacemos chistes malos.

## Licencia

MIT
