require("dotenv").config()

const ENV_NAME = process.env.NAME || "Juan";
const ENV_AGE = process.env.AGE || "18";

console.log(`Hola, me llamo ${ENV_NAME} y tengo ${ENV_AGE} años.`)
