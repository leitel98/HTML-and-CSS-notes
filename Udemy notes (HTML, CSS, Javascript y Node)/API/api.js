// asignacion de framework de express, require nos permite importar dependencias que instalemos
const express = require('express')
// se creara a partir de la exe de express
const user = require('./user.controller')
const app = express()
// se ejecuta en este puerto
const port = 3000

// este get es para la raiz
app.get('/', user.list)
app.post('/', user.create)
app.get('/:id', user.get)
// el id dice que es un dato variable en la ruta, esta estructura es importante
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)
//manejo de rutas indef
app.get('*',(req, res) => {
    res.status(404).send('This page does not exist')
})

app.listen(port, () => {
    console.log('Initializating')
})