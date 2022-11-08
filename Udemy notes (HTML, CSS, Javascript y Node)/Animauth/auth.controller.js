const express = require('express')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const User = require('./user.model')

var jwt = require('express-jwt');
const validateJwt = jwt({ secret: 'caca', algorithms: ['HS256'] })

const signToken = _id => jsonwebtoken.sign({ _id}, 'caca')

const findAndAssignUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if (!user) {
            return res.status(401).end()
        }
        req.user = user
        next()
    }   catch(e) {
        next(e)
    }
}


const isAuthenticated = express.Router().use(validateJwt, findAndAssignUser)

const Auth = {
    login: async (req, res) => {
        const { body } = req
        try {
            const user = await User.findOne({ email: body.email })
            if (!user) {
                res.status(401).send('User or password invalid')
            } else {
                const isMatch = await bcrypt.compare(body.password, user.password)
                if (isMatch) {
                    const signed = signToken(user._id)
                    res.status(200).send(signed)
                } else {
                    res.status(401).send('User or password invalid')
                }
            }
        } catch(e) {
            res.send(e.message)
        }
    },
    register: async (req, res) => {
        const { body } = req
        try {
            const isUser = await User.findOne({ email: body.email })
            if(isUser) {
                res.send('This user already exists')
            } else {
                const salt = await bcrypt.genSalt()
                const hashed = await bcrypt.hash(body.password, salt)
                const user = await User.create({ email: body.email, password: hashed, salt })

                const signed = signToken(user._id)
                res.send(signed)
            }
        } catch(err) {
            res.status(500).send(err.message)
        }
    },
}

module.exports = { Auth, isAuthenticated }