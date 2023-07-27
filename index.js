const express = require('express')
const cors = require('cors')
const { PORT } = require('./config')
const {enviarEmail} = require('./mail/mail')
const app = express()

app.use(express.json())

app.use(cors())


app.get('/', async(req,res)=>{
  return res.json({msg: 'Tudo certo'})
});

app.post('/send-email', async(req,res)=>{
  try {
    const {nome, email, telefone,mensagem} = req.body;
    enviarEmail(nome, email, telefone,mensagem)
    
  } catch (error) {
    console.error(error);
  }
})

app.listen(PORT || 5001,()=>{
  console.log(`Servidor rodando na porta 127.0.0.1:${PORT}`)
})