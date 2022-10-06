El cliente es quien va a consumir nuestra api rest, puede ser un celular, un PC, etc.
Se puede comunicar con distintos dispositivos, esta se encontrara con una nube que almacena los datos.
Vamos a utilizar la base de datos mongo DB.
Entonces el cliente se conecta a la API quien busca los datos en la DB y la devuelve al cliente.
Tenemos distintos verbos para conectarnos: GET, POST, PUT, PATCH, DELETE. Cada uno ejecuta algo distintos
GET = [users], si llamamos con ID nos da objeto {user}
POST = Crear users
PUT = reemplaza users
PATCH = actualiza, se usaran indistintamente con PUT
DELETE = borra un user.

mkdir crea una carpeta
cd nos lleva a esa carpeta
pwd me muestra donde estoy

npm init -y: crea el package.json
npm install -S express: node package module instala dependencias guardadas en package json de nombre express

el package lock tiene un archivo de todas las dependencias que se instalaron
es importante porque para instalar las dependencias si ya teniamos un archivo asi va a revisar las versiones
e instalara las mismas y no las ultimas, es importante al trabajar en ambientes productivos, queremos ser
explicitos al instalar una dependencia

MONGO DB
Base de datos orientada a documentos JSON, son parecidos a JS
tienen propiedades y estas tienen un valor
"prop":"valor"

Se compone de colecciones, que son listados de documentos
por ejemplo users podria tener un listado de documentos como usuarios con propiedades
distintas, esto se corrige con los esquemas de una libreria mongoose

3 alternativas: community server que es un paquete que se instala mongo dentro del pc 
enterprise es pagada
mongo atlas es en la nube, contiene bases de datos de mongo db gratis hasta 500mb

mongodb+srv://leitel:narreputo1@practicecluster.ma2pktt.mongodb.net/<setname>?retryWrites=true&w=majority