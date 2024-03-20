const userCollection = require('../Models/User')
const tokenGenerator = require('random-token-generator')
const create = (req, res) => {
    userCollection.find({mail: req.body.mail, password: req.body.password})
        .then(value => {

            if (value.length === 0) {
                res.json({status: "warning", message: "User could not founded"})
            } else if (value[0].token !== undefined) {
                res.json({status: "warning", message: "User already has a token"})
            } else {
                tokenGenerator.generateKey({
                    len: 10,
                    string: true,
                    strong: false,
                    retry: false
                }, (err, key) => {
                    userCollection.updateOne({mail: req.body.mail, password: req.body.password}, {$set: {token: `Bearer ${key}`}})
                        .then(result => res.json({status:"ok",message:`Your authentication key is ${key}`}))
                        .catch(err => res.json(err))

                })
            }
        })

}

module.exports = {create}