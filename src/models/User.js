const mogoose = require("mongoose")

const UserSchema = new mogoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
    },
    idade:{
        type: Number,
    }

    }
)

module.exports =mogoose.model("User",UserSchema)