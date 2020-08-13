const Persona = require("../models/Persona")
//const { listIndexes } = require("../models/User")
module.exports={

    async show(req,res){
        try{
            const {personaId} = req.params

            const persona = await Persona.find({
                _id: personaId
            })

            if(persona.length===0){
                return res.status(401).json({error: "Usuario não cadastrado com este id!"})
            }

           
            return  res.status(200).json({persona})

        }catch{
            console.log(erro)
            return  res.status(500).json({msg:"Problemas para mostrar"})
        }
    },

    async list(req,res){
        try{
            const persona = await Persona.find()
           // console.log(personas)
            return res.status(200).json({persona})

        }catch{
            console.log(erro)
            return res.status(500).json({msg:"Problemas para listar"})
        }
    },


    async create(req, res){
        try{
            const { owner, name, sex, age, role, where_works, scolarship,
                   communication_means, dreams, problems, company_help,
                   company_workers, company_role,image
            } = req.body
            
           
           
            const persona = await Persona.create({ owner, name, sex, age, role, where_works, scolarship,
                communication_means, dreams, problems, company_help,
                company_workers, company_role,image})
             //console.log(user)
             
             return res.status(201).json({persona}) 
        }catch(erro){
            console.log(erro)
            return res.status(500).json({msg:"Problemas para criar"})
        }
    },
    
    async update(req, res){
        try{
            const { name, sex, age, role, where_works, sccolarship,
                communication_means, dreams, problems, company_help,
                company_workers, company_role,image
            } = req.body
            const {personaId} = req.params

            const personaExist = await Persona.find({_id: personaId})

            if(!personaExist){
                return res.status(401).json({error: "Não foi possivel encontrar usuario cadastrado!"})
            }
            const persona = await Persona.findByIdAndUpdate({
                _id: personaId
            },{ 
                 name, sex, age, role, where_works, sccolarship,
                communication_means, dreams, problems, company_help,
                company_workers, company_role, image
            },{
                new:true
            })
            // console.log(user)
             
            return res.status(200).json({persona}) 
        }catch(erro){
           console.log(erro)
          return  res.status(500).json({msg:"Problemas para atualizar"})
        }
    }, 

    async delete(req, res){
        try{
            const {personaId} = req.params
            const personaExist = await Persona.find({_id: personaId})

            if(!personaExist){
                return res.status(401).json({error: "Não foi possivel deletar, usuario não cadastrado!"})
            }
            const persona = await Persona.findByIdAndDelete({_id: personaId})
            
             
             return res.status(200).json({persona}) 
        }catch(erro){
            console.log(erro)
            return res.status(500).json({msg:"Problemas para deletar"})
        }
    }, 


}
