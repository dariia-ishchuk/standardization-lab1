const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema( {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be a positive number!");
            }
        }
    },
    email: {
        type: String,
        required: true,
        lowerCase: true,
        uniq: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 7,
        validate(value) {
            if (value === "password") {
                throw new Error("Password value cannot be equal to 'password'")
            }
        }
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User