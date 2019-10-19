# Como trabajar variables de entorno en Node.js

## Antes de empezar

* Tener Node.js (versión 12 o superior) y NPM (versión 6 o superior) instalados.
* Ejecutar `npm install` para instalar el paquete requerido
* En en **caso 3** crear un archivo llamado `.env` (sin nombre, solo la extensión), en la raiz del directorio, y usar el ejemplo dado

## Caso 1: La variable de entorno no existe

En el caso en que se acceda a una variable de entorno que no existe, el valor por defecto es undefined, por ello se debe crear un fallback para esos casos, por ejemplo:

`const ENV_NAME = process.env.NAME || "Juan";`

`ENV_NAME` tomará el valor de "Juan" en el caso que `process.env.NAME` no este definido.

## Caso 2: Variables de entorno del proceso

Al ejecutar el script, se le pasan las variables al ejecutable, así:

`NAME="Pablo" AGE=21 node app.js`

En este caso, no tomará los valores por defecto, sino los que sean pasados al ejecutable.

## Caso 3: Archivo .env

En algunos casos, es mucho más cómodo tener un archivo `.env` durante el desarrollo (nunca es recomendable agregar este archivo al repositorio, ya que la idea es que contenga credenciales a servicios como DB, COS, CDN, etc.); un ejemplo del contenido de un archivo `.env` es:

```
NAME="Pedro"
AGE=25
```

Y para que sean reconocidos dentro del código, usar un paquete como [dotenv](https://www.npmjs.com/package/dotenv), el cual carga el contenido del archivo `.env` al proceso. Para eso es necesario inicializar el paquete lo más pronto posible, antes de usar las variables de entorno, para ello se usa:

`require("dotenv").config()`
