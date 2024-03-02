const mongoose = require(`mongoose`)

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, `Name is Required`],
        },
        email: {
            type: String,
            required: [true, `Email is Required`],
            unique: true,
        },
        password: {
            type: String,
            required: [true, `Password is Required`],
        },
        // age: {
        //     type: String,
        //     required: [true, `Age is Required`],
        // },
        // gender: {
        //     type: String,
        //     required: [true, `Gender is Required`],
        // },
        // school: {
        //     type: String,
        //     required: [true, `Gender is Required`],
        // },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model(`Users`, userSchema)