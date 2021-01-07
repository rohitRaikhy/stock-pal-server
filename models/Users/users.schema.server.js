
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please check your data entry, no username specified!"]

    },
    email: {
        type: String,
        required: [true, "Please check your data entry, no email specified!"]
    },
    password: {
        type: String,
        required: [true, "Please check your data entry, no password specified!"]
    },
    gender: {
        type: String,
        required: [true, "Please check your data entry, no gender specified!"]
    },
    role: {
        role: String,
        enum: ['ADMIN', 'ACTIVE_INVESTOR', 'PASSIVE_INVESTOR'],
    }
}, {collection:'users'})

module.exports = userSchema
