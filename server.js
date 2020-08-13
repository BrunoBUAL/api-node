const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")

const mongoose = require("mongoose")

const app = express()
let port = 3000
app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port} `)
})

mongoose.connect("mongodb+srv://api-node2:123@cluster0.rh9od.mongodb.net/<dbname>?retryWrites=true&w=majority", 
{                   
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false 
})

app.use(bodyParser.json())
app.use(cors())
app.use('/', require('./src/routes.js'))



//trazer informação
app.get('/teste',(req, res) =>{
    res.json({users})
})


//criar
/*app.post('/',async (req, res) =>{
   const {nome, cidade, idade} = req.body

   //users[nome] = {nome, idade, cidade}
   const user = await User.create({nome, cidade, idade})
    //console.log(req.body)
    //res.json({msg:"Usuario criado com sucesso!"})

    res.json({user})
})*/

//users["Bruno"] = {idade:25, cidade:"RS"}


//atualizar
app.put('/:nome',(req, res) =>{
    const {nome} = req.params
    const {cidade, idade} = req.body

    users[nome] = {cidade, idade, nome}

    //console.log(nome, cidade, idade)
    res.json("Usuario Alterado")
})
//deletar
app.delete('/:nome',(req, res) =>{
    const {nome} = req.params;
    delete users[nome]
    res.json("Usuario deletado")
})



