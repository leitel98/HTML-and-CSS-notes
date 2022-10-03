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