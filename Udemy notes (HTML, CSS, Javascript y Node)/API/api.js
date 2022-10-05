const express = require('express')// asignacion de framework de express, require nos permite importar dependencias que instalemos
const mongoose = require('mongoose')
const user = require('./user.controller')// se creara a partir de la exe de express
const app = express()
const port = 3000// se ejecuta en este puerto

app.use(express.json())
mongoose.connect('mongodb+srv://leitel:narreputo1@practicecluster.ma2pktt.mongodb.net/miapp?retryWrites=true&w=majority')

app.get('/users', user.list)// este get es para la raiz
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)// el id dice que es un dato variable en la ruta, esta estructura es importante
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

app.use(express.static('app'))//usa todos los archivos de la carpeta

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)//manda donde nos encontramos
})
app.get('*',(req, res) => {//manejo de rutas indef
    res.status(404).send('This page does not exist')
})

app.listen(port, () => {
    console.log('Initializating')
})