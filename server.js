const express = require('express')
const bodyParser = require('body-parser')

const app = express()
let port = 3000
app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port} `)
})

app.use(bodyParser.json())

const users = {

}

//trazer informação
app.get('/',(req, res) =>{
    res.json({users})
})
//criar
app.post('/',(req, res) =>{
   const {nome, cidade, idade} = req.body

   users[nome] = {cidade, idade, nome}
   
    //console.log(req.body)
    res.json({msg:"Usuario criado com sucesso!"})
})

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


