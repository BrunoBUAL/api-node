const mogoose = require("mongoose")

const UserSchema = new mogoose.Schema(
    {
        nome: {
            type: String,
            
        },
        email: {
            type: String,
            required: true,
        },
        cargo:{
            type: String,
        }

    },
    {
        timestamps:true
    }
)

module.exports =mogoose.model("User",UserSchema)