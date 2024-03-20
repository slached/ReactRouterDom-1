const userCollection = require('../Models/User')
const express = require('express')
const create = (req, res) => {
    const newUserData = req.body
    const newUser = new userCollection(newUserData)
    newUser.save().then(value => {
        res.status(201).json({status: `${value.mail} created successfully`})
    }).catch(err => res.json(err))
}

const getUserData = (req, res) => {
    let token = req.headers.authorization
    if (token === undefined) token = " "

    userCollection.exists({token: token})
        .then((value) => {
            value !== null ? userCollection.find().then(value => res.json(value)).catch(err => res.json(err)) : res.json({
                status: "error",
                message: "Token doesn't exists"
            })
        })
}
module.exports = {create, getUserData}