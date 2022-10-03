const mongoose = require('mongoose')
// cambiamos el user, la contra y el nombre en este caso mi app
mongoose.connect('mongodb+srv://leitel:narreputo1@practicecluster.ma2pktt.mongodb.net/miapp?retryWrites=true&w=majority')

// primer obj es el nombre del modelo y el segundo es un objeto con las propiedades
const User = mongoose.model('User', {
    username: String,
    age: Number,
})

const create = async () => {
    const user = new User({username: 'second user', age: 25})
    // save es una promesa, va a buscar y si se puede da la cte
    const savedUser = await user.save()
    console.log(savedUser)
}
// incluye el id unico de la db
// create()

const searchAll = async () => {
    const users = await User.find() //nos devuelve un arr con los usuarios
    console.log(users)
}

// searchAll()

const search = async () => {
    // busca los elementos con la condicion que le pase
    const user = await User.find({ username: 'first user'})
    console.log(user)
}

// search()

const seatchOne = async () => {
    const user = await User.findOne({ username: 'first user'})
    console.log(user)
} 

// seatchOne()

const update = async () => {
    const user = await User.findOne({ username: 'first user'})
    console.log(user)
    user.age = 30
    // find one va a tener save pero ojo si esta en un arreglo, indice
    await user.save()
}

// update()

const eliminate = async () => {
    const user = await User.findOne({ username: 'second user'})
    console.log(user)
    if (user){
        await user.remove()
    }
}

eliminate()