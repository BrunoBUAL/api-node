const User = require("../models/User")
const { listIndexes } = require("../models/User")
module.exports={

    async show(req,res){
        try{
            const {userId} = req.params

            const users = await User.find({
                _id: userId
            })

            if(users.length===0){
                return res.status(401).json({error: "Usuario não cadastrado com este id!"})
            }

           // console.log(users)
            return  res.status(200).json({users})

        }catch{
            console.log(erro)
            return  res.status(500).json({msg:"Problemas para mostrar"})
        }
    },

    async list(req,res){
        try{
            const users = await User.find()
           // console.log(users)
            return res.status(200).json({users})

        }catch{
            console.log(erro)
            return res.status(500).json({msg:"Problemas para listar"})
        }
    },


    async create(req, res){
        try{
            const {nome, email, cargo} = req.body
            
            const userExist = await User.find({email})

            if(userExist){
                return res.status(401).json({error: "Já existe o email cadastrado!"})
            }
           
            const user = await User.create({nome,email, cargo})
             //console.log(user)
             
             return res.status(201).json({user}) 
        }catch(erro){
            console.log(erro)
            return res.status(500).json({msg:"Problemas para criar"})
        }
    },
    
    async update(req, res){
        try{
            const {nome, email, cargo} = req.body
            const {userId} = req.params

            const userExist = await User.find({_id: userId})

            if(!userExist){
                return res.status(401).json({error: "Não foi possivel encontrar usuario cadastrado!"})
            }
            const user = await User.findByIdAndUpdate({
                _id: userId
            },{ 
                nome,
                email,
                cargo
            },{
                new:true
            })
            // console.log(user)
             
            return res.status(200).json({user}) 
        }catch(erro){
           console.log(erro)
          return  res.status(500).json({msg:"Problemas para atualizar"})
        }
    }, 

    async delete(req, res){
        try{
            const {userId} = req.params
            const userExist = await User.find({_id: userId})

            if(!userExist){
                return res.status(401).json({error: "Não foi possivel deletar, usuario não cadastrado!"})
            }
            const user = await User.findByIdAndDelete({_id: userId})
             //console.log(user)
             
             return res.status(200).json({user}) 
        }catch(erro){
            console.log(erro)
            return res.status(500).json({msg:"Problemas para deletar"})
        }
    }, 


}
