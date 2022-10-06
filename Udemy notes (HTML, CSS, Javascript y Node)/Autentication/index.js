const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const User = require('./user')

mongoose.connect('mongodb+srv://leitel:narreputo1@practicecluster.ma2pktt.mongodb.net/auth?retryWrites=true&w=majority')

const app = express()

app.use(express.json())

const validateJwt = expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] })//porque si
const signToken = _id => jwt.sign({ _id}, process.env.SECRET)//secret se exporto como var y se env

app.post('/register', async (req, res) => {
    const { body } = req
    console.log({ body })
    try {//intentara hacer algo y si fracasa lanzara un error en catch
        const isUser = await User.findOne({ email: body.email })//buscara un usuario por su mail dentro de body
        if (isUser) {
            return res.status(403).send('user already exists')
        }
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(body.password, salt)
        const user = await User.create({ email: body.email, password: hashed, salt })

        const signed = signToken(user._id)//se crea un json webtoken
        res.status(201).send(signed)

    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

app.post('/login', async (req, res) => {
    const { body } = req
    try {
        const user = await User.findOne({ email: body.email })
        if (!user) {
            res.status(403).send('Invalid user or password')
        } else {
            const isMatch = await bcrypt.compare(body.password, user.password)
            if (isMatch) {
                const signed = signToken(user._id)
                res.status(200).send(signed)
            } else {
                res.status(403).send('Invalid user or password')
            }
        }
    } catch(err) {
        res.status(500).send(err.message)
    }
})

//lo siguiente es un middleware
const findAndAssignUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if (!user) {
            return res.status(401).end()
        }
        req.user = user
        next()
    } catch (e) {
        next(e)
    }
}

const isAuthenticated = express.Router().use(validateJwt, findAndAssignUser)

app.get ('/ep',isAuthenticated, (req, res) => {//validate protege la ruta, luego pasamos middleware
    throw new Error('new error')
    res.send(req.user)
})

app.use((err, req, res, next) => {
    console.error('My new error', err.stack)//log del error en consola
    next(err)
})
app.use((err, req, res, next) => {
    res.send('An error has happened :(')//msg al usuario
    next(err)
})
app.listen(3000, () => {
    console.log('listening in port 3000')
})