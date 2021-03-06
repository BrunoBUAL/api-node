const mogoose = require("mongoose")

const PersonaSchema = new mogoose.Schema(
    {
        owner:{
           type: mogoose.Schema.Types.ObjectId,
           ref: "User",
           required: true
        },
        name:{
            type:String
        },
        sex:{
            type:String
        },
        age:{
            type:String
        },
        role:{
            type:String
        },
        where_works:{
            type:String
        },
        scolarship:{
            type:String
        },
        communication_means:{
            type:String
        },
        dreams:{
            type:String
        },
        problems:{
            type:String
        },
        company_help:{
            type:String
        },
        company_workers:{
            type:String
        },
        company_role:{
            type:String
        },
        image:{
            type:String
        },

    },
    {
        timestamps:true
    }
)

module.exports =mogoose.model("Persona",PersonaSchema)