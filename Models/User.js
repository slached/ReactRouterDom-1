const mongoose = require('mongoose')

const validateEmail = function (email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    mail: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: "Email address is required",
        validate: [validateEmail, 'Please fill a valid email address']
    },
    password: {
        type: String,
        trim: true,
        maxLength: 20,
        required: "Password is required",
    },
    token: {
        type: String,
        trim: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('users', userSchema)