const User = {
    get: (req, res) => {
        res.status(200).send('This is one element')
    },
    list: (req, res) => {
        res.status(200).send('Hola!')
    },
    create: (req, res) => {
        res.status(201).send('Creating')
    },
    // se va a ignorar el cuerpo con postman
    update: (req, res) => {
        res.status(204).send('Updating')
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminating')
    }
}

// ahora se exporta
module.exports = User