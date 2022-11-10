import express from 'express' //module convention
import path from 'path'

const app = express() //utiliza el resultado de la app de express

app.use(express.json()) //interpreta json

app.use(express.static('app')) //sirve la carpeta

app.get('/', (req,res) => {
    res.sendFile(`${path.resolve()}/index.html`)//nueva forma de referenciar archivos, no dirname, si no le paso nada devuelve el directorio actual
})

app.listen(3000, () => console.log('App running'))